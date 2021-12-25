import { put, call } from 'redux-saga/effects';
import { getQuestionsReducer, isError, isLoading, isSuccess } from '../../../slices/questionsSlice';
import { getData } from '../../../../api/mainApi';
import { requestPathNames } from '../../../../utils/constants';

export function* getQuestionsWorker() {
  yield put(isLoading());

  try {
    const response: Array<{[n: string]: any}> = yield call(getData, requestPathNames.questions);

    yield put(getQuestionsReducer(response));

    yield put(isSuccess());
  } catch (err: any) {
    console.log(err.message);
    
    yield put(isError(err));
  }
}
