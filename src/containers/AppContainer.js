import { connect } from 'react-redux';
import {
  setArticles,
  setActiveArticle
} from '../redux/articles/articlesActions';
import { createStructuredSelector } from 'reselect';
import { selectArticlesList } from '../redux/articles/articlesSelectors';

import App from '../App';

const mapStateToProps = createStructuredSelector({
  articlesList: selectArticlesList
});

export default connect(mapStateToProps, { setArticles, setActiveArticle })(App);
