import { all, call } from 'redux-saga/effects';
import { watchQuestions } from './questionsSaga/watchers';

export function* rootSaga() {
  yield all([
    call(watchQuestions),
  ]);
}