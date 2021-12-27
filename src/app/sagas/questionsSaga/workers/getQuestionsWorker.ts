import { put, call, select } from 'redux-saga/effects';
import { getQuestionsReducer, isError, isLoading, isSuccess, selectQuestionsQuery } from '../../../slices/questionsSlice';
import { getData } from '../../../../api/mainApi';
import { requestPathNames } from '../../../../utils/constants';
import { BackendType } from '../../../../utils/types';

export function* getQuestionsWorker() {
  const { page, pagesize, sort } = yield select(selectQuestionsQuery);

  yield put(isLoading());

  try {
    const response: BackendType = yield call(getData, requestPathNames.questions, { params: { page, pagesize, sort } });

    yield put(getQuestionsReducer(response));

    yield put(isSuccess());
  } catch (err: any) {
    yield put(isError(err));
  }
}
