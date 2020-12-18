import actionTypes from "./actionTypes";
import userAPI from "../api/userAPI";

export const createUser = user => {
  return async dispatch => {
    return userAPI.createUser(user)
      .then(users => {
        dispatch(createUserSuccess(users));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const createUserSuccess = user => {
  return { 
      type: actionTypes.CREATE_USER_SUCCESS, 
      payload: user, 
    };
};

export const getUserbyId = user => {
  return async dispatch => {
    return userAPI.getUserbyId(user)
      .then(users => {
        dispatch(getUserSuccess(users));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const getUserSuccess = user => {
    return { 
        type: actionTypes.GET_USER_SUCCESS, 
        payload: user, 
    };
}

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
