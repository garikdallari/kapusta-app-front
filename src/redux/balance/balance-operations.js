import { createAsyncThunk } from '@reduxjs/toolkit';
import * as balanceApi from '../../services/balanceAPI';

const getUserBalance = createAsyncThunk('auth/getUserBalance', async () => {
  const balance = await balanceApi.getUserBalance();
  return balance.data.result;
});

const updateUserBalance = createAsyncThunk(
  'auth/updateUserBalance',
  async balance => {
    const updatedBalance = await balanceApi.updateBalance(balance);
    return updatedBalance.data;
  },
);

export { updateUserBalance, getUserBalance };
