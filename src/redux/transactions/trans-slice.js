import { createSlice } from '@reduxjs/toolkit';
import transOperations from './trans-operations';

const initialState = {
  byType: [],
  all: [],
  allByMonth: {},
  summary: [],
  type: 'expense',
};

const transSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    [transOperations.deleteTransactions.fulfilled](state, { payload }) {
      state.byType = state.byType.filter(item => item._id !== payload);
      state.all = state.all.filter(item => item._id !== payload);
    },

    [transOperations.getBalanceBy6Month.fulfilled](state, { payload }) {
      state.summary = [...payload];
    },

    [transOperations.getAllByType.fulfilled](state, { payload }) {
      state.byType = [...payload.response].reverse();
      state.type = payload.type;
    },

    [transOperations.getAllByMonth.fulfilled](state, { payload }) {
      state.allByMonth = {
        expenseRes: [...payload.expenseRes],
        incomeRes: [...payload.incomeRes],
        subIncomeRes: [...payload.subcategoryIncomeRes],
        subExpenseRes: [...payload.subcategoryExpenseRes],
        expenseBalanceByMonth: payload.expenseBalanceByMonth,
        incomeBalanceByMonth: payload.incomeBalanceByMonth,
      };
    },
    [transOperations.createTransactions.fulfilled](state, { payload }) {
      state.byType = [payload, ...state.byType];
      state.all = [payload, ...state.all];
    },

    [transOperations.listAllTransactions.fulfilled](state, { payload }) {
      state.all = [...payload].reverse();
    },
  },
});
export default transSlice.reducer;
