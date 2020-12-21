import actionTypes from "../actions/actionTypes";

const initialState = {
};

const userLoginCompleted = (state, action) => {
  console.log("user login attempted");
  return {
    ...state,
    users: {
      ...state.users,
      [action.name]: {
        ...action.payload
      }
    }
  };
};

const userCreateCompleted = (state, action) => {
  console.log("user login attempted");
  return {
    ...state,
    users: {
      ...state.users,
      [action.payload.name]: {
        userName: action.payload.name,
        isLogged: action.payload.active
      }
    }
  };
};

const userUpdateCompleted = (state, action) => {
  console.log("user login attempted");
  return {
    ...state,
    users: {
      ...state.users,
      [action.name]: {
        ...action.payload
      }
    }
  };
};

const userDeleteCompleted = (state, action) => {
  console.log("user login attempted");
  return {
    ...state,
    users: {
      ...state.users,
      [action.name]: {
        ...action.payload
      }
    }
  };
};



const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return userLoginCompleted(state, action);
    case actionTypes.CREATE_USER_SUCCESS:
      return userCreateCompleted(state, action);
    case actionTypes.UPDATE_USER_SUCCESS:
      return userUpdateCompleted(state, action);
    case actionTypes.DELETE_USER_SUCCESS:
      return userDeleteCompleted(state, action);
    default:
      return state;
  }
};

export default userReducer;