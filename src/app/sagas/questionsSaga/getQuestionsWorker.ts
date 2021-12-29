import { put, call, select } from 'redux-saga/effects';
import { getQuestionsReducer, selectQuestionsQuery } from '../../slices/questionsSlice';
import { isLoading, isSuccess, isError } from '../../slices/requestStateSlice';
import { getData } from '../../../api/mainApi';
import { QUESTIONS_FILTER, requestPathNames } from '../../../utils/constants';
import { BackendType } from '../../../utils/types';

export function* getQuestionsWorker() {
  const { page, pagesize, sort, tagged } = yield select(selectQuestionsQuery);

  yield put(isLoading());

  try {
    const response: BackendType = yield call(getData, requestPathNames().questions, { params: { filter: QUESTIONS_FILTER, page, pagesize, sort, tagged } });

    yield put(getQuestionsReducer(response));

    yield put(isSuccess());
  } catch (err: any) {
    yield put(isError(err));
  }
}
