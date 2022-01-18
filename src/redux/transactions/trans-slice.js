import { createSlice } from '@reduxjs/toolkit';
import transOperations from './trans-operations';

const initialState = {
  transactions:[],
 balance: 0,
};

const transSlice = createSlice({
  name: 'transaction',
  initialState,

  extraReducers: {
    [transOperations.deleteTransaction.fulfilled] 
        (state, { payload }){
            state.transaction=state.filter(item => String(item.id) !== payload);
    },
  },
});


export default transSlice.reducer;