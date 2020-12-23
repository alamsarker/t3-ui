import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ApiReducer from './apiSlice';
import GameReducer from './gameSlice';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(), 
  sagaMiddleware
];

export default configureStore({
  reducer: {
    game: GameReducer,
    api: ApiReducer
  },
  middleware
});

sagaMiddleware.run(sagas);

