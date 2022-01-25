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
      state.byType = [...payload.response];
      state.type = payload.type;
    },

    [transOperations.getAllByMonth.fulfilled](state, { payload }) {
      state.allByMonth = {
        expenseRes: [...payload.expenseCategories],
        incomeRes: [...payload.incomeCategories],
        subIncomeRes: payload.incomeSubcategories,
        subExpenseRes: payload.expenseSubcategories,
        expenseBalanceByMonth: payload.expenseSum,
        incomeBalanceByMonth: payload.incomeSum,
      };
    },
    [transOperations.createTransactions.fulfilled](state, { payload }) {
      state.byType = [payload, ...state.byType];
      state.all = [payload, ...state.all];
    },

    [transOperations.listAllTransactions.fulfilled](state, { payload }) {
      state.all = [...payload];
    },
  },
});
export default transSlice.reducer;
