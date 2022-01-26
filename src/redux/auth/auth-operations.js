import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { tostifyAuthOptions } from '../../helpers/tostifyAuthOptions';

// axios.defaults.baseURL = 'http://localhost:8000/api';
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
    token.set(data.data.token);
    return data;
  } catch (error) {
    toast.error('This email is already registered ', tostifyAuthOptions);
    console.log(error.message);
    throw new Error(error.mesage);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('auth/login', credentials);
    token.set(data.data.token);
    return data;
  } catch (error) {
    toast.error('Incorrect username or password', tostifyAuthOptions);
    console.log(error.message);
    throw new Error(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/auth/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
});

const getCurrentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;

  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const response = await axios.get('/auth/current').then(res => res.data);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(console.log(error));
  }
});

const firstSetBalance = createAsyncThunk(
  'auth/firstSetBalance',
  async token => {
    try {
      const response = await axios.patch(`/balance/firstSetBalance`, {
        Authorization: `Bearer ${token}`,
      });
      const result = response.data.result;
      return result;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  },
);

export const authOperations = {
  signup,
  login,
  logout,
  getCurrentUser,
  firstSetBalance,
};

export default authOperations;
