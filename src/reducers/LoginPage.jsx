import actionTypes from "../actions/actionTypes";

const initialState = {
  userId: "",
  userName: "",
  password: "",
};

const userLoginAttempted = (state, action) => {
  console.log("user login attempted");
  return {
    ...state,
    userName: action.payload.userName,
    password: action.payload.password,
    isLogged: action.payload.isLogged,
  };
};

const Button = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_ATTEMPTED:
      return userLoginAttempted(state, action);
    default:
      return state;
  }
};

export default Button;
