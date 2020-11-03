import actionTypes from "../actions/actionTypes";

const initialState = {
  userName: "",
  password: "",
  isLogged: false,
};

const userRegistrationCompleted = (state, action) => {
  console.log("user registered");
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
      return userRegistrationCompleted(state, action);
    default:
      return state;
  }
};

export default Button;