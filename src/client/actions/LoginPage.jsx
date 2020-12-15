import actionTypes from "./actionTypes";

export const userLoginAttempted = (props) => {
  return {
    type: actionTypes.USER_LOGIN_ATTEMPTED,
    payload: {
      isLogged: props.isLogged,
      userName: props.username,
      password: props.password,
    },
  };
};

