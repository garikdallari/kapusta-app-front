const getIsLoggedIn = state => state.auth.IsLoggedIn;

const getUsername = state => state.auth.user.name;

const getToken = state => state.auth.user.token;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken
};

export default authSelectors;
