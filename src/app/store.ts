import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import authenticationReducer from '../slices/authenticationSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authentication: authenticationReducer,
  counter: counterReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
    // thunk: false 
  }).concat(sagaMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
