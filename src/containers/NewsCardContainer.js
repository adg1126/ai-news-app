import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectActiveArticle } from '../redux/articles/articlesSelectors';

import NewsCard from '../component/NewsCard';

const mapStateToProps = createStructuredSelector({
  activeArticle: selectActiveArticle
});

export default connect(mapStateToProps)(NewsCard);
