import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export async function getUserBalance() {
  const { data } = await axios.get(`/api/auth/balance`);
  return data;
}
export async function updateBalance(balance) {
  const { data } = await axios.put(`/auth/balance`, balance);
  return data;
}

// const signup = createAsyncThunk('auth/signup', async credentials => {
//   try {
//     const { data } = await axios.post('/auth/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//     throw new Error(error.mesage);
//   }
// });
