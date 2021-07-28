import { takeLatest, put, all } from 'redux-saga/effects';
import { FETCH_ARTICLES_START } from './articlesActionTypes';
import { fetchArticlesSuccess, fetchArticlesFailure } from './articlesActions';
import history from '../../history';

const NEWS_API_KEY = 'a33b7c4e15c147a58ef2a09202bd122f';

export function* fetchArticlesAsync({ payload: { reqParams, term } }) {
  let newsApiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;

  newsApiUrl =
    reqParams === 'sources'
      ? `${newsApiUrl}&sources=${term.replace(/\s+/g, '-').toLowerCase()}`
      : reqParams === 'terms'
      ? `${newsApiUrl}&q=${term}`
      : reqParams === 'categories'
      ? `${newsApiUrl}&category=${term}`
      : `${newsApiUrl}&country=us`;

  try {
    const res = yield fetch(newsApiUrl);
    const { articles } = yield res.json();
    yield put(fetchArticlesSuccess(articles));
    reqParams === 'latest-news'
      ? history.push(reqParams)
      : history.push(`${reqParams}/${term.replace(/\s+/g, '-').toLowerCase()}`);
  } catch (err) {
    yield put(fetchArticlesFailure(err.message));
  }
}

export function* fetchArticlesStart() {
  yield takeLatest(FETCH_ARTICLES_START, fetchArticlesAsync);
}

export function* articlesSagas() {
  yield all([fetchArticlesStart()]);
}
