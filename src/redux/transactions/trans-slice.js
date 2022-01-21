import { createSlice } from '@reduxjs/toolkit';
import transOperations from './trans-operations';

const initialState = {
  transactions: [],
  summary: [],
  type:"expense"
};

const transSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    [transOperations.deleteTransactions.fulfilled](state, { payload }) {
      state.transactions =
        state.transactions.filter(item => item._id !== payload)
        },

    [transOperations.getBalanceBy6Month.fulfilled](state, { payload }) {
      state.summary = [...payload];
    },

    [transOperations.getAllByType.fulfilled](state, { payload }) {
      state.transactions = [...payload].reverse();
    },
    
    [transOperations.getAllByMonth.fulfilled](state, { payload }) {
      state.transactions = [...payload];
    },
    
    [transOperations.createTransactions.fulfilled](state,  {payload} ) {
       state.transactions = [payload,...state.transactions];
    },
  },
});

export default transSlice.reducer;
