import actionTypes from "./actionTypes";
import userAPI from "../api/userAPI";

export function createUser(user) {
    return function (dispatch) {
      // validate unique email address here
      return userAPI.createUser(user).then(resUser => {
        dispatch(createUserSuccess(resUser));
      }).catch(error => {
        throw(error);
      });
    };
  }

export const createUserSuccess = user => {
  return { 
      type: actionTypes.CREATE_USER_SUCCESS, 
      payload: user, 
    };
};

export const clearUserSuccess = () => {
  return {
    type: actionTypes.CLEAR_USER_SUCCESS,
  }
};

export const getUserbyName = user => {
  return function (dispatch) {
    return userAPI.getUserbyName(user)
      .then(resUser => {
        dispatch(getUserSuccess(resUser, user));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const getUserbyEmail = user => {
  return function (dispatch) {
    return userAPI.getUserbyEmail(user)
      .then(resUser => {
        dispatch(getUserSuccess(resUser, user)
      )})
      .catch(err => {
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
    };
  };

export const updateUserbyId = (user) => {
    return async dispatch => {
        return userAPI.updateUserbyId(user)
          .then(users => {
            dispatch(updateUserSuccess(users));
          })
          .catch(err => {
            throw err;
          });
      };
};

export const updateUserSuccess = user => {
    return { 
        type: actionTypes.GET_USER_SUCCESS, 
        payload: user 
    };
}

export const deleteUserbyId = user => {
    return async dispatch => {
        return userAPI.deleteUserbyId(user)
          .then(users => {
            dispatch(deleteUserSuccess(users));
          })
          .catch(err => {
            throw err;
          });
      };
};

export const deleteUserSuccess = user => {
    return { 
        type: actionTypes.GET_USER_SUCCESS, 
        payload: user 
    };
}
