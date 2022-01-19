import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-33-5-api.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signup = createAsyncThunk('auth/signup', async credentials => {
  try {
    const { data } = await axios.post('/auth/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.mesage);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

const getCurrent = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  if (!token) return;
  token.set(state.auth.token);

  try {
    const data = await axios.get('/auth/current');
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

export const authOperations = {
  signup,
  login,
  logout,
  getCurrent,
};

export default authOperations;
