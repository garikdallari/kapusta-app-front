import { createSlice } from '@reduxjs/toolkit';
import transOperations from './trans-operations';

const initialState = {
  transactions: [],
  summary:[],
};


const transSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    [transOperations.deleteTransactions.fulfilled] 
        (state, { payload }){
            state.transactions=state.filter(item => String(item._id) !== payload)},

    [transOperations.getBalanceBy6Month.fulfilled] 
            (state, { payload }){
              state.summary=[...payload]}
            ,
    
    [transOperations.getAllByType.fulfilled] 
            (state, { payload }){
              state.transactions=[...payload]}
            }
        
});


export default transSlice.reducer;