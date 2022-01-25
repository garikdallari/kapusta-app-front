import { createAsyncThunk } from '@reduxjs/toolkit';
import * as balanceApi from '../../services/balanceAPI';
import axios from 'axios';

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

const firstSetBalance = createAsyncThunk(
  'transactions/firstSetBalance',
  async token => {
    try {
      const response = await axios.patch(`/balance/firstSetBalance`, {
        Authorization: `Bearer ${token}`,
      });
    const {balance}=response.data;
     console.log(balance);
      return balance;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  },
);

export { updateUserBalance, getUserBalance, firstSetBalance };
