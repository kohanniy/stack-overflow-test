import { takeEvery, all, call } from 'redux-saga/effects';
import { getQuestionId } from '../../slices/answersSlice';
import { getAnswersWorker } from './getAnswersWorker';

function* watchFetchAnswers() {
  yield takeEvery(getQuestionId, getAnswersWorker);
}

export function* watchAnswers() {
  yield all([
    call(watchFetchAnswers),
  ]);
}
