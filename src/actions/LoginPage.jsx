import actionTypes from "./actionTypes";

export const userLoginAttempted = (props) => {
  return {
    type: actionTypes.USER_LOGIN_ATTEMPTED,
    payload: {
      userId: props.userName,
      userName: props.userName,
      password: props.password,
    },
  };
};
