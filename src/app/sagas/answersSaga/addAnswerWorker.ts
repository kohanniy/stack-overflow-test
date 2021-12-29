import { put, call } from 'redux-saga/effects';
import { isError } from '../../slices/requestStateSlice';
import { addData } from '../../../api/mainApi';
import { ADD_ANSWER_FILTER, requestPathNames } from '../../../utils/constants';
import { loading, success } from '../../slices/answersSlice';
import { IAddAnswer } from '../../../utils/types';

export function* addAnswerWorker(action: { type: string, payload: IAddAnswer }) {
  yield put(loading());

  try {
    yield call(addData, requestPathNames(Number(action.payload.id)).add_answer, action.payload, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, params: { filter: ADD_ANSWER_FILTER } });

    yield put(success());
  } catch (err: any) {
    yield put(isError(err));
  }
}
