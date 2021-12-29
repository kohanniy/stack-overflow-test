import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IQuestionsState {
  items: Array<{ [n: string]: any }>;
  answers: Array<{ [n: string]: any }>;
  pagesize: number;
  page: number,
  total: number,
  sort: string,
  tagged: string,
}

const initialState: IQuestionsState = {
  items: [],
  answers: [],
  pagesize: 15,
  page: 1,
  total: 0,
  sort: 'creation',
  tagged: '',
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestionsQueryParams: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    getQuestionsReducer: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    getAnswersReducer: (state, action) => {
      console.log('reducer', action.payload);
    },
    reset: () => initialState
  },
});

export const {
  reset,
  setQuestionsQueryParams,
  getQuestionsReducer,
} = questionsSlice.actions;

export const selectQuestionsQuery = (state: RootState) => state.questions;

export default questionsSlice.reducer;
