import actionTypes from "./actionTypes";
import UserApi from "../api/userAPI";

export const createUser = user => {
  return async dispatch => {
    return UserApi.createUser(user)
      .then(users => {
        dispatch(createUserSuccess(users));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const createUserSuccess = users => {
  return { 
      type: actionTypes.CREATE_USER_SUCCESS, 
      users 
    };
};

export const getUserbyId = user => {
  return async dispatch => {
    return UserApi.getUserbyId(user)
      .then(users => {
        dispatch(getUserSuccess(users));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const getUserSuccess = users => {
    return { 
        type: actionTypes.GET_USER_SUCCESS, 
        users 
    };
}

export const updateUserbyId = (user) => {
    return async dispatch => {
        return UserApi.updateUserbyId(user)
          .then(users => {
            dispatch(updateUserSuccess(users));
          })
          .catch(err => {
            throw err;
          });
      };
};

export const updateUserSuccess = users => {
    return { 
        type: actionTypes.GET_USER_SUCCESS, 
        users 
    };
}

export const deleteUserbyId = user => {
    return async dispatch => {
        return UserApi.deleteUserbyId(user)
          .then(users => {
            dispatch(deleteUserSuccess(users));
          })
          .catch(err => {
            throw err;
          });
      };
};

export const deleteUserSuccess = users => {
    return { 
        type: actionTypes.GET_USER_SUCCESS, 
        users 
    };
}
