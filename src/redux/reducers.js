import { combineReducers } from 'redux';
import articlesReducer from './articles/articlesReducer';

export default combineReducers({ articles: articlesReducer });
