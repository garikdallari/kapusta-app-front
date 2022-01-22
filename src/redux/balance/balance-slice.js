import { createSlice } from '@reduxjs/toolkit';
import { updateUserBalance, getUserBalance } from './index';

const initialState = {
  balance: 0,
  isLoading: false,
};

const balanceSlice = createSlice({
  name: 'userBalance',
  initialState,
  extraReducers: {
    [getUserBalance.pending]: (state, _) => {
      state.isLoading = true;
    },

    [getUserBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload;
      state.isLoading = false;
    },

    [getUserBalance.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [updateUserBalance.pending]: (state, _) => {
      state.isLoading = true;
    },

    [updateUserBalance.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.balance = payload.balance;
      state.isLoading = false;
    },

    [updateUserBalance.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default balanceSlice.reducer;
