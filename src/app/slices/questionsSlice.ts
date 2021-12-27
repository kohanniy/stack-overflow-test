import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IQuestionsState {
  items: Array<{ [n: string]: any }>;
  pagesize: number;
  page: number,
  error: { message?: string } | null;
  status: 'idle' | 'loading' | 'success' | 'error',
  total: number,
  sort: string,
}

const initialState: IQuestionsState = {
  items: [],
  pagesize: 15,
  page: 1,
  error: null,
  status: 'idle',
  total: 0,
  sort: 'creation'
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    isLoading: (state) => ({
      ...state,
      status: 'loading',
    }),
    isSuccess: (state) => ({
      ...state,
      status: 'success',
    }),
    isError: (state, action) => ({
      ...state,
      status: 'error',
      error: { message: action.payload.message },
      items: [],
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
    getQuestionsReducer: (state, action) => {
      const { items, total } = action.payload;
      console.log(action.payload);

      return { ...state, items, total }
    },
    reset: () => initialState
  },
});

export const triggerForGetQuestions = createAction('questions/triggerForGetQuestions');

export const { isLoading, isSuccess, isError, reset, setPage, getQuestionsReducer } = questionsSlice.actions;

export const selectQuestionsQuery = (state: RootState) => state.questions;

export default questionsSlice.reducer;
