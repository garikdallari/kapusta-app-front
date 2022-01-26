import axios from 'axios';

export async function getUserBalance() {
  try {
    const { data } = await axios.get('/balance');
    return data.data.balance;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateBalance(balance) {
  try {
    const data = await axios.patch('/balance', balance);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
