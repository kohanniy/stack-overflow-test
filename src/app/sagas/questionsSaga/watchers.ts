import { takeEvery, all, call } from 'redux-saga/effects';
import { setQuestionsQueryParams } from '../../slices/questionsSlice';
import { getQuestionsWorker } from './workers';

function* watchFetchQuestions() {
  yield takeEvery(setQuestionsQueryParams, getQuestionsWorker);
}

export function* watchQuestions() {
  yield all([
    call(watchFetchQuestions),
  ]);
}
