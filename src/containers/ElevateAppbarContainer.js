import { connect } from 'react-redux';
import { setArticles } from '../redux/articles/articlesActions';
import ElevateAppBar from '../component/ElevateAppBar';

export default connect(null, { setArticles })(ElevateAppBar);
