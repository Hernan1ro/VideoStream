const reducer = (state, action) => {
  switch ((state, action.type)) {
    case "SET_FAVORITES":
      const listIds = state.myList.map((item) => item.id);
      if (listIds.includes(action.payload.id)) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          myList: [...state.myList, action.payload],
        };
      }
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: [
          ...state.myList.filter((item) => item.id !== action.payload.id),
        ],
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === action.payload) ||
          state.originals.find((item) => item.id === action.payload) ||
          [],
      };
    default:
      return state;
  }
};
export default reducer;
