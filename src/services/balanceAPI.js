import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-33-5-api.herokuapp.com/api';

export async function getUserBalance() {
  try {
    const { data } = await axios.get('/balance');
    return data.data.balance;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateBalance(balance) {
  console.log(balance);
  try {
    const data = await axios.patch('/balance', balance);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
