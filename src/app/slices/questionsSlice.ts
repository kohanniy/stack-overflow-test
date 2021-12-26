import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IQuestionsState {
  items: Array<{ [n: string]: any }> | null;
  itemsPerPage: number;
  error: { message?: string } | null;
  status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: IQuestionsState = {
  items: null,
  itemsPerPage: 15,
  error: null,
  status: 'idle'
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    isLoading: (state) => {
      state.status = 'loading';
    },
    isSuccess: (state) => {
      state.status = 'success';
    },
    isError: (state, action) => {
      state.status = 'error';
      state.error = { message: action.payload };
      state.items = null;
    },
    getQuestionsReducer: (state, action) => {
      state.items = action.payload.items
    },
    reset: () => initialState
  },
});

export const triggerForGetQuestions = createAction('questions/triggerForGetQuestions');

export const { isLoading, isSuccess, isError, reset, getQuestionsReducer } = questionsSlice.actions;

export const selectQuestionsQuery = (state: RootState) => state.questions;

export default questionsSlice.reducer;
