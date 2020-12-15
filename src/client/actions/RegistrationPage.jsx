import actionTypes from "./actionTypes";

export const userRegistrationCompleted = (props) => {
  return {
    type: actionTypes.USER_REGISTRATION_COMPLETED,
    payload: {
      isLogged: props.isLogged,
      userName: props.userName,
      password: props.password,
    },
  };
};