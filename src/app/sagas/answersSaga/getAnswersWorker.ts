import { put, call } from 'redux-saga/effects';
import { getAnswersReducer } from '../../slices/answersSlice';
import { isLoading, isSuccess, isError } from '../../slices/requestStateSlice';
import { getData } from '../../../api/mainApi';
import { ANSWERS_FILTER, requestPathNames } from '../../../utils/constants';
import { BackendType } from '../../../utils/types';

export function* getAnswersWorker(action: { type: string, payload: string }) {
  yield put(isLoading());

  try {
    const response: BackendType = yield call(getData, requestPathNames(action.payload).answers, { params: { sort: 'creation', filter: ANSWERS_FILTER } });

    yield put(getAnswersReducer(response));

    yield put(isSuccess());
  } catch (err: any) {
    yield put(isError(err));
  }
}
