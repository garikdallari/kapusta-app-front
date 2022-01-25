const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getFetchingCurrent = state => state.auth.isFetchingCurrent;
const getToken = state => state.auth.token;
const getTypeTransactions = state => state.transactions.type;
const isBalanceSet=state=>state.auth.isBalanceSet;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getFetchingCurrent,
  getTypeTransactions,
  isBalanceSet
};

export default authSelectors;
