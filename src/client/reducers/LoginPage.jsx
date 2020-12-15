import actionTypes from "../actions/actionTypes";

const initialState = {
};

const userLoginAttempted = (state, action) => {
  console.log("user login attempted");
  return {
    ...state,
    users: {
      ...state.users,
      user1: {
        ...action.payload
      }
    }
  };
};

const LoginPage = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_ATTEMPTED:
      return userLoginAttempted(state, action);
    default:
      return state;
  }
};

export default LoginPage;
