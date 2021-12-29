import { createAction, createSlice } from '@reduxjs/toolkit';
import { IAddAnswer } from '../../utils/types';
import { RootState } from '../store';

export interface IAnswersState {
  items: Array<{ [n: string]: any }>;
  question: {
    tags: string[];
    body_markdown: string;
    title: string;
  } | null;
  addAnswerStatus: 'idle' | 'loading' | 'success' | 'error',
}

const initialState: IAnswersState = {
  items: [],
  question: null,
  addAnswerStatus: 'idle',
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      addAnswerStatus: 'loading'
    }),
    success: (state) => ({
      ...state,
      addAnswerStatus: 'success'
    }),
    getAnswersReducer: (state, action) => {
      const { question, answers: items } = action.payload;
      return {
        ...state,
        items,
        question,
      }
    },
    reset: () => initialState
  },
});

export const getQuestionId = createAction<string | undefined>('answers/getQuestionId');
export const addAnswer = createAction<IAddAnswer>('answers/addAnswers');

export const {
  reset,
  getAnswersReducer,
  loading,
  success,
} = answersSlice.actions;

export const selectAnswersQuery = (state: RootState) => state.answers;

export default answersSlice.reducer;
