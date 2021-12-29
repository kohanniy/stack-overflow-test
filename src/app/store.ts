import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authenticationReducer from './slices/authenticationSlice';
import questionsReducer from './slices/questionsSlice';
import requestStateReducer from './slices/requestStateSlice';
import answersReducer from './slices/answersSlice';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  authentication: authenticationReducer,
  questions: questionsReducer,
  answers: answersReducer,
  requestState: requestStateReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['requestState/isError'],
    },
    thunk: false
  }).concat(sagaMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
