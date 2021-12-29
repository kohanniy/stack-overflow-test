import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IAnswersState {
  items: Array<{ [n: string]: any }>;
  question: {
    tags: string[];
    body_markdown: string;
    title: string;
  } | null;
}

const initialState: IAnswersState = {
  items: [],
  question: null,
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    getAnswersReducer: (state, action) => {
      console.log('reducer', action.payload);
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

export const {
  reset,
  getAnswersReducer
} = answersSlice.actions;

export const selectAnswersQuery = (state: RootState) => state.answers;

export default answersSlice.reducer;
