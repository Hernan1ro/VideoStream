export const setFavorites = (payload) => ({
  type: "SET_FAVORITES",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});
export const loginUser = (payload) => {
  return {
    type: "LOGIN_USER",
    payload,
  };
};
export const logoutUser = (payload) => ({
  type: "LOGOUT_USER",
  payload,
});

export const registerUser = (payload) => {
  return {
    type: "REGISTER_USER",
    payload,
  };
};
