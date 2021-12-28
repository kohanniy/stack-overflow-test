import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IQuestionsState {
  items: Array<{ [n: string]: any }>;
  pagesize: number;
  page: number,
  error: { message?: string } | null;
  status: 'idle' | 'loading' | 'success' | 'error',
  total: number,
  sort: string,
  tagged: string,
}

const initialState: IQuestionsState = {
  items: [],
  pagesize: 15,
  page: 1,
  error: null,
  status: 'idle',
  total: 0,
  sort: 'creation',
  tagged: '',
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
    setQuestionsQueryParams: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    getQuestionsReducer: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    reset: () => initialState
  },
});

export const {
  isLoading,
  isSuccess,
  isError,
  reset,
  setQuestionsQueryParams,
  getQuestionsReducer
} = questionsSlice.actions;

export const selectQuestionsQuery = (state: RootState) => state.questions;

export default questionsSlice.reducer;
