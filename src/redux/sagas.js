import { all, call } from 'redux-saga/effects';
import { articlesSagas } from './articles/articlesSagas';

export default function* rootSaga() {
  yield all([call(articlesSagas)]);
}
