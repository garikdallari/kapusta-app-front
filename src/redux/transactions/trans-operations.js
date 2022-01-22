import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


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
    const response = await data.data.result;  
      return {response:response, type:type};
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
      return data ? data.result : null;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const createTransactions = createAsyncThunk(
  'transactions/createTransactions',
  async ({type,amount,category,description,day,month,year,token}) => {
   const body = {
      "type": type,
      "amount": Number(amount),
      "category": category.toLowerCase(),
      "subcategory": description,
      "date": {
        "day": day,
        "month": month,
        "year": year,

      },
    };
      try {
      const response = await axios.post(`/transactions`, body, {
        Authorization: `Bearer ${token}`,
      });
      const { data } = response;

      return data.data;
    } catch (error) {
      console.log(error.message);
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
