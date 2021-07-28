import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import { ThemeProvider } from '@material-ui/styles';
import theme from './component/ui/Theme';

import ElevateAppbarContainer from './containers/ElevateAppbarContainer';
import Home from './pages/Home';
import ErrorBoundary from './component/ErrorBoundary';
import Spinner from './component/Spinner';

const CategoriesContainer = lazy(() =>
  import('./containers/CategoriesContainer')
);
const LatestContainer = lazy(() => import('./containers/LatestContainer'));
const TermsContainer = lazy(() => import('./containers/TermsContainer'));
const SourcesContainer = lazy(() => import('./containers/SourcesContainer'));

const ALAN_API_KEY =
  'bcf3cb511986d8cdf626c2e8b77998a92e956eca572e1d8b807a3e2338fdd0dc/stage';

class App extends React.Component {
  componentDidMount() {
    const { setArticles, setActiveArticle } = this.props;

    this.alanBtnInstance = alanBtn({
      key: ALAN_API_KEY,
      onCommand: ({
        command,
        articles,
        number,
        route: { reqParams, term }
      }) => {
        if (command === 'newHeadlines') {
          setArticles(articles);

          reqParams === 'latest-news'
            ? history.push(reqParams)
            : history.push(
                `${reqParams}/${term.replace(/\s+/g, '-').toLowerCase()}`
              );
        } else if (command === 'highlight') {
          setActiveArticle(prevArticle => prevArticle + 1);
        } else if (command === 'open') {
          const parsedNum =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;

          if (parsedNum > 20) {
            alanBtn().playText('Please try that again.');
          } else {
            window.open(articles[parsedNum].url, '_black');
            alanBtn().playText('Openning...');
          }
        }
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.articlesList !== prevProps.articlesList) {
      this.sendArticles(this.props.articlesList);
    }
  }

  sendArticles = articles => {
    this.alanBtnInstance.callProjectApi(
      'sendArticles',
      {
        data: articles
      },
      function (err, res) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(res);
      }
    );
  };

  protectedRoutes = () => (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Route path='/categories/:id' exact component={CategoriesContainer} />
        <Route path='/sources/:id' exact component={SourcesContainer} />
        <Route path='/terms/:id' exact component={TermsContainer} />
        <Route path='/latest-news' exact component={LatestContainer} />
      </Suspense>
    </ErrorBoundary>
  );

  render() {
    const { articlesList } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <ElevateAppbarContainer />
          <Switch>
            <Route path='/' exact component={Home} />
            {articlesList.length ? (
              <Route component={this.protectedRoutes} />
            ) : (
              <Redirect to='/' />
            )}
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
