import { configureStore } from '@reduxjs/toolkit';
import reducer from './transactions/trans-reducer';

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
