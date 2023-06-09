export const globalLocalStorage = {
  setAccessToken: (accessToken) => {
    localStorage.setItem("X-Access", accessToken);
    window.dispatchEvent(new Event("storage"));
  },
  removeAccessToken: () => {
    localStorage.removeItem("X-Access");
    window.dispatchEvent(new Event("storage"));
  },
  getAccessToken: () => localStorage.getItem("X-Access"),
  setRefreshToken: (refreshToken) => {
    localStorage.setItem("X-Refresh", refreshToken);
    window.dispatchEvent(new Event("storage"));
  },
  removeRefreshToken: () => {
    localStorage.removeItem("X-Refresh");
    window.dispatchEvent(new Event("storage"));
  },
  getRefreshToken: () => localStorage.getItem("X-Refresh"),
  cleanLocalStorage: () => localStorage.clear(),
};
