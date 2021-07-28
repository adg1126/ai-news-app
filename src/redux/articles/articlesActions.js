import {
  SET_ARTICLES,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SET_ACTIVE_ARTICLE
} from './articlesActionTypes';

export const setArticles = articlesMap => ({
  type: SET_ARTICLES,
  payload: articlesMap
});

export const fetchArticlesStart = (reqParams, term) => ({
  type: FETCH_ARTICLES_START,
  payload: { reqParams, term }
});

export const fetchArticlesSuccess = articlesMap => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articlesMap
});

export const fetchArticlesFailure = errMsg => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: errMsg
});

export const setActiveArticle = articleIndex => ({
  type: SET_ACTIVE_ARTICLE,
  payload: articleIndex
});
