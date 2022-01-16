import { createAction } from '@reduxjs/toolkit';

const addTransaction = createAction('transaction/create', data => ({
  payload: data,
}));

const updateBalance = createAction('balance/update', data => ({
  payload: data,
}));

const addUser = createAction('user/add', data => ({
  payload: data,
}));

export default {
  addTransaction,
  updateBalance,
  addUser,
};
