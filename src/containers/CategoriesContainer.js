import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectArticlesList,
  selectIsArticlesFetching
} from '../redux/articles/articlesSelectors';

import WithSpinner from './WithSpinner';
import Categories from '../pages/Categories';

const mapStateToProps = createStructuredSelector({
  articlesList: selectArticlesList,
  isFething: selectIsArticlesFetching
});

export default compose(connect(mapStateToProps), WithSpinner)(Categories);
