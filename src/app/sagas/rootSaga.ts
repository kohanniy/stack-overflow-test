import { all, call } from 'redux-saga/effects';
import { watchAnswers } from './answersSaga/watchers';
import { watchQuestions } from './questionsSaga/watchers';

export function* rootSaga() {
  yield all([
    call(watchQuestions),
    call(watchAnswers),
  ]);
}