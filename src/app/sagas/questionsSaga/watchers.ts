import { takeEvery, all, call } from 'redux-saga/effects';
import { setPage } from '../../slices/questionsSlice';
import { getQuestionsWorker } from './workers';

function* watchFetchQuestions() {
  yield takeEvery(setPage, getQuestionsWorker);
}

export function* watchQuestions() {
  yield all([
    call(watchFetchQuestions),
  ]);
}
