import { createAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IRequestStatusState {
  error: { message?: string } | null;
  status: 'idle' | 'loading' | 'success' | 'error',
}

const initialState: IRequestStatusState = {
  error: null,
  status: 'idle',
};

export const requestStateSlice = createSlice({
  name: 'requestState',
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
    }),
    resetRequestState: () => initialState
  },
});

export const {
  isLoading,
  isSuccess,
  isError,
  resetRequestState,
} = requestStateSlice.actions;

export const selectRequestState = (state: RootState) => state.requestState;

export default requestStateSlice.reducer;
