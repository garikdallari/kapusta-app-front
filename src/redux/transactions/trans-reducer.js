import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './trans-actions';

const transactions = createReducer([], {
  [actions.addTransaction]: (state, { payload }) => [...state, payload],
});

const balance = createReducer(0, {
  [actions.updateBalance]: (state, { payload }) => state + payload,
});

export default combineReducers({
  transactions,
  balance,
});
