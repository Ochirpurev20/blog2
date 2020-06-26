const init = {
  cookie: false,
  globalUser: "",
  userID: "",
  userDate: "",
};
const reducer = (state = init, action) => {
  switch (action.type) {
    case "getCookieTrue":
      return { ...state, cookie: true };

    case "getCookieFalse":
      return { ...state, cookie: false };

    case "getUser":
      return { ...state, globalUser: action.user };

    case "getUserDate":
      return { ...state, userDate: action.date };

    case "getUserId":
      return { ...state, userID: action.Id };

    default:
      break;
  }

  return state;
};
export default reducer;
