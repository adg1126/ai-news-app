import { connect } from 'react-redux';
import { fetchArticlesStart } from '../redux/articles/articlesActions';

import CategoryCard from '../component/CategoryCard';

export default connect(null, { fetchArticlesStart })(CategoryCard);
