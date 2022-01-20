import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.fulfilled](state, { payload }) {
      state.user = payload.data.user;
      state.token = payload.data.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.user = payload.data.user;
      state.token = payload.data.token;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.data;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },
    [authOperations.getCurrentUser.pending](state, _) {
      state.isFetchingCurrent = true;
    },
    [authOperations.getCurrentUser.rejected](state, _) {
      state.isFetchingCurrent = false;
    },
  },
});

export default authSlice.reducer;
