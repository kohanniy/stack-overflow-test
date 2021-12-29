import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IAnswersState {
  items: Array<{ [n: string]: any }>;
}

const initialState: IAnswersState = {
  items: [],
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    getAnswersReducer: (state, action) => {
      console.log('reducer', action.payload);
      return {
        ...state,
        items: action.payload.items
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

export const selectAnswers = (state: RootState) => state.answers.items;

export default answersSlice.reducer;
