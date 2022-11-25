// Set access token and refresh token to localstorage
const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

// Get access token from localstorage
const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

// Get refresh token from localstorage
const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

// Remove access token and refresh token from localstorage
const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export { setTokens, getAccessToken, getRefreshToken, removeTokens };
