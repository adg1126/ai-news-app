import {
  SET_ARTICLES,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SET_ACTIVE_ARTICLE
} from './articlesActionTypes';

const INITIAL_STATE = {
  articlesList: [],
  activeArticle: null,
  isFetching: false,
  errMessage: ''
};

const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return { ...state, isFetching: false, errMessage: action.payload };
    case FETCH_ARTICLES_START:
      return { ...state, isFetching: true };
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, isFetching: false, articlesList: action.payload };
    case FETCH_ARTICLES_FAILURE:
      return { ...state, isFetching: false, errMessage: action.payload };
    case SET_ACTIVE_ARTICLE:
      return { ...state, activeArticle: action.payload };
    default:
      return state;
  }
};

export default articlesReducer;
