import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isBalanceSet: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokenToState(state, { payload }) {
      state.token = payload;
    },
  },
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
      state.isBalanceSet = payload.data.user.isBalanceSet;
    },
    [authOperations.logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isBalanceSet = false;
    },
    [authOperations.getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload.data;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
      state.isBalanceSet = payload.data.isBalanceSet;
    },
    [authOperations.getCurrentUser.pending](state, _) {
      state.isFetchingCurrent = true;
    },
    [authOperations.getCurrentUser.rejected](state, _) {
      state.isFetchingCurrent = false;
    },

    [authOperations.firstSetBalance.fulfilled]: (state, { payload }) => {
      state.isBalanceSet = payload.isBalanceSet;
      console.log(payload);
    },
  },
});

export const { setTokenToState } = authSlice.actions;
export default authSlice.reducer;
