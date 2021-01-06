import actionTypes from "../actions/actionTypes";

const initialState = {
};

const userLoginCompleted = (state, action) => {
  return {
    ...state,
    users: {
      'user1': {
        isLogged: action.payload.active,
        userName: action.payload.name
      }
    }
  };
};

const userLoginFailed = (state, action) => {
  return {
    ...state,
    users: {
      'user1': {
        isLogged: false,
        userName: null
      }
    }
  };
};

const userCreateCompleted = (state, action) => {
  return {
    ...state,
    users: {
      'user1': {
        userName: action.payload.name,
        isLogged: action.payload.active
      }
    }
  };
};

const userCreateFailed = (state, action) => {
  return {
    ...state,
    users: {
      'user1': {
        userName: null,
        isLogged: false
      }
    }
  };
};

const userLogoutCompleted = (state) => {
  return {
    ...state,
    users: {
      'user1': {
        userName: "",
        isLogged: false
      }
    }
  };
};

// const userUpdateCompleted = (state, action) => {
//   console.log("user login attempted");
//   return {
//     ...state,
//     users: {
//       ...state.users,
//       [action.name]: {
//         ...action.payload
//       }
//     }
//   };
// };

// const userDeleteCompleted = (state, action) => {
//   console.log("user login attempted");
//   return {
//     ...state,
//     users: {
//       ...state.users,
//       [action.name]: {
//         ...action.payload
//       }
//     }
//   };
// };



const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return userLoginCompleted(state, action);
    case actionTypes.CREATE_USER_SUCCESS:
      return userCreateCompleted(state, action);
    case actionTypes.CLEAR_USER_SUCCESS:
      return userLogoutCompleted(state, action);
    case actionTypes.USER_LOGIN_FAILED:
      return userLoginFailed(state, action);
    case actionTypes.CREATE_USER_FAILURE:
      return userCreateFailed(state, action);
    
    // case actionTypes.UPDATE_USER_SUCCESS:
    //   return userUpdateCompleted(state, action);
    // case actionTypes.DELETE_USER_SUCCESS:
    //   return userDeleteCompleted(state, action);
    default:
      return state;
  }
};

export default userReducer;