import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

async function deleteTransaction(id, token) {
    await axios.delete(`/api/transactions/${id}`,{
        Authorization: `Bearer ${token}`
    });
}

const transactionAPI={
    deleteTransaction
}

export default transactionAPI;