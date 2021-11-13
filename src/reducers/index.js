const reducer = (state, action) => {
  switch ((state, action.type)) {
    case "SET_FAVORITES":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    default:
      return state;
  }
};
export default reducer;
