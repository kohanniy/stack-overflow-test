import { takeEvery, all, call } from 'redux-saga/effects';
import { getQuestionId, addAnswer } from '../../slices/answersSlice';
import { addAnswerWorker } from './addAnswerWorker';
import { getAnswersWorker } from './getAnswersWorker';

function* watchFetchAnswers() {
  yield takeEvery(getQuestionId, getAnswersWorker);
}

function* watchAddAnswer() {
  yield takeEvery(addAnswer, addAnswerWorker)
}

export function* watchAnswers() {
  yield all([
    call(watchFetchAnswers),
    call(watchAddAnswer),
  ]);
}
