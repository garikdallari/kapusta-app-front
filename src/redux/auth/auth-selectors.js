const getIsLoggedIn = state => state.auth.IsLoggedIn;

const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};

export default authSelectors;
