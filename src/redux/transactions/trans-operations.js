import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://kapusta-33-5-api.herokuapp.com/api';

const deleteTransactions = createAsyncThunk(
  'transactions/delete',

  async (id, token) => {
    try {
      await axios.delete(`/transactions/${id}`, {
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
      console.log(data.result.balanceByMonth);
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
      console.log(data.data.result);
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
      const { data } = await axios.get(`/transactions/getAllByMonth/${date}`, {
        Authorization: `Bearer ${token}`,
      });

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const createTransactions = createAsyncThunk(
  'transactions/createTransactions',

  async (type, amount, category, subcategoty, day, month, year, token) => {
    const body = {
      type: `${type}`,
      amount: `${amount}`,
      category: `${category}`,
      subcategory: `${subcategoty}`,
      date: {
        day: `${day}`,
        month: `${month}`,
        year: `${year}`,
      },
    };
    try {
      const response = await axios.post(`/transactions`, body, {
        Authorization: `Bearer ${token}`,
      });
      const { data } = response;

      return data.data;
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
  createTransactions,
};

export default transOperations;
