import axios from 'axios';

async function deleteTransaction(id, token) {
  await axios.delete(`/transactions/${id}`, {
    Authorization: `Bearer ${token}`,
  });
}

const transactionAPI = {
  deleteTransaction,
};

export default transactionAPI;
