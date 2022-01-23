const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getFetchingCurrent = state => state.auth.isFetchingCurrent;
const getToken = state => state.auth.token;
const getTypeTransactions = state => state.transactions.type;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getFetchingCurrent,
  getTypeTransactions,
};

export default authSelectors;
