import { all, call } from 'redux-saga/effects';
import { watchQuestions } from './sagas/questionsSaga/watchers';

export function* rootSaga() {
  yield all([
    call(watchQuestions),
  ]);
}