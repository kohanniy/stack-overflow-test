import { put, call } from 'redux-saga/effects';
import { getAnswersReducer } from '../../slices/answersSlice';
import { isLoading, isSuccess, isError } from '../../slices/requestStateSlice';
import { getData } from '../../../api/mainApi';
import { ANSWERS_FILTER, QUESTION_FILTER, requestPathNames } from '../../../utils/constants';
import { BackendType } from '../../../utils/types';

export function* getAnswersWorker(action: { type: string, payload: string }) {
  yield put(isLoading());

  try {
    const question: BackendType = yield call(getData, requestPathNames(action.payload).question, { params: { sort: 'creation', filter: QUESTION_FILTER } });

    const answers: BackendType = yield call(getData, requestPathNames(action.payload).answers, { params: { sort: 'creation', filter: ANSWERS_FILTER } });

    yield put(getAnswersReducer({ question: question.items[0], answers: answers.items }));

    yield put(isSuccess());
  } catch (err: any) {
    yield put(isError(err));
  }
}
