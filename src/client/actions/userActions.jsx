import actionTypes from "./actionTypes";
import userAPI from "../api/userAPI";

export function createUser(user) {
  return function (dispatch) {
    // Validate unique username is entered
    return userAPI.getUserbyName(user)
      .then(resUser => {
        if(resUser.name.len > 0) {
          alert(`That user name is already in use, please enter a different username and try again`);
          return createUserFailure();
        }
      })
      .catch(err => {
        //Validate unique email address is entered
        userAPI.getUserbyEmail(user)
          .then(resUser => {
            if(resUser.email.len > 0) {
              dispatch(createUserFailure());
              alert(`That email address is already registered to an account, please use a different email address and try again`);
              return;
            };
          })
          .catch(err => {
            //Create unique user in DB after validating unique email and username
            userAPI.createUser(user)
              .then((resUser) => {
                dispatch(createUserSuccess(resUser));
              })
              .catch((error) => {
                throw error;
              });
          });
      });
  };
};

export const createUserSuccess = (user) => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUserFailure = (user) => {
  return {
    type: actionTypes.CREATE_USER_FAILURE,
    payload: user,
  };
};

export const clearUserSuccess = () => {
  return {
    type: actionTypes.CLEAR_USER_SUCCESS,
  };
};

export const getUserbyName = (user) => {
  return function (dispatch) {
    return userAPI
      .getUserbyName(user)
      .then((resUser) => {
        dispatch(getUserSuccess(resUser, user));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const getUserbyEmail = (user) => {
  return function (dispatch) {
    return userAPI
      .getUserbyEmail(user)
      .then((resUser) => {
        dispatch(getUserSuccess(resUser, user));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const getUserSuccess = (resUser, user) => {
  // password validation between front end and db
  if (resUser.active === 1) {
    resUser.active = true;
  } else resUser.active = false;
  // console.log(resUser.password, user.password);
  if (resUser.password === user.password) {
    return {
      type: actionTypes.GET_USER_SUCCESS,
      payload: resUser,
    };
  } else {
    return {
      type: actionTypes.USER_LOGIN_FAILED,
    };
  }
};

export const updateUserbyId = (user) => {
  return async (dispatch) => {
    return userAPI
      .updateUserbyId(user)
      .then((users) => {
        dispatch(updateUserSuccess(users));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payload: user,
  };
};

export const deleteUserbyId = (user) => {
  return async (dispatch) => {
    return userAPI
      .deleteUserbyId(user)
      .then((users) => {
        dispatch(deleteUserSuccess(users));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const deleteUserSuccess = (user) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    payload: user,
  };
};
