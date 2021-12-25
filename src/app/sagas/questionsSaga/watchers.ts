import { takeEvery, all, call } from 'redux-saga/effects';
import { triggerForGetQuestions } from '../../slices/questionsSlice';
import { getQuestionsWorker } from './workers';

function* watchFetchQuestions() {
  yield takeEvery(triggerForGetQuestions, getQuestionsWorker);
}

export function* watchQuestions() {
  yield all([
    call(watchFetchQuestions),
  ]);
}
