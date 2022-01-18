const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.user.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken
};

export default authSelectors;
