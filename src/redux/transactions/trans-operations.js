import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://localhost:8000/api';

const deleteTransactions = createAsyncThunk(
  'transactions/delete',

  async (id, token) => {
    try {
      const data = await axios.delete(`/transactions/${id}`, {
        Authorization: `Bearer ${token}`,
      });

      return id;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const getBalanceBy6Month = createAsyncThunk(
  'transactions/getBalanceBy6Month',

  async (type, token) => {
    try {
      const { data } = await axios.get(
        `/transactions/getBalanceBy6Month/${type}`,
        {
          Authorization: `Bearer ${token}`,
        },
      );

      return data.result.balanceByMonth;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const getAllByType = createAsyncThunk(
  'transactions/getAllByType',

  async (type, token) => {
    try {
      const { data } = await axios.get(`/transactions/getAllByType/${type}`, {
        Authorization: `Bearer ${token}`,
      });

      return data.data.result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const getAllByMonth = createAsyncThunk(
  'transactions/getAllByMonth',

  async (date, token) => {
    try {
      const data = await axios.get(`/transactions/getAllByMonth/${date}`, {
        Authorization: `Bearer ${token}`,
      });
      return data.data.result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const transOperations = {
  deleteTransactions,
  getBalanceBy6Month,
  getAllByType,
  getAllByMonth,
};

export default transOperations;
