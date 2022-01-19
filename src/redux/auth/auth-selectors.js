const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getFetchingCurrent = state => state.auth.isFetchingCurrent;
const getToken = state => state.auth.user.token;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getFetchingCurrent,
};

export default authSelectors;
