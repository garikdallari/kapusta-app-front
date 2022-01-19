import { createAsyncThunk } from '@reduxjs/toolkit';
import transactionAPI from '../../services/transaction-API';

export const deleteTransaction= createAsyncThunk(
    'transaction/delete',
  
    async (id, token) => {
      try {
        await transactionAPI.deleteTransaction(id, token);
      } catch (error) {
        throw new Error(error.message);
      }
    },
);

const transOperations={
   deleteTransaction
}
export default transOperations;