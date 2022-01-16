import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './trans-actions';

const transactionsReducer = createReducer([], {
  [actions.addTransaction]: (state, { payload }) => [...state, payload],
});

const balanceReducer = createReducer(0, {
  [actions.updateBalance]: (state, { payload }) => state + payload,
});

const userReducer = createReducer(null, {
  [actions.addUser]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  transactionsReducer,
  balanceReducer,
  userReducer,
});
