import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IAuthState {
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  isLoggedIn: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export const selectLoggedIn = (state: RootState) => state.authentication.isLoggedIn;

export default authenticationSlice.reducer;
