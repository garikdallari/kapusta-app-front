import { createAsyncThunk } from '@reduxjs/toolkit';
import * as balanceApi from '../../services/balanceAPI';

const getUserBalance = createAsyncThunk(
  'auth/getUserBalance',
  async (_, { rejectWithValue }) => {
    try {
      const balance = await balanceApi.getUserBalance();
      return balance;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

const updateUserBalance = createAsyncThunk(
  'auth/updateUserBalance',
  async ({ balance }, { rejectWithValue }) => {
    try {
      const updatedBalance = await balanceApi.updateBalance({ balance });
      return updatedBalance;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export { updateUserBalance, getUserBalance };
