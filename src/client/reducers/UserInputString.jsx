import actionTypes from "../actions/actionTypes";

const initialState = {};

const onChange = (state, action) => {
  console.log("Input Changed!");
  return {
    ...state,
    inputsSTR: {
      ...state.inputsSTR,
      [action.id]: {
        ...action.payload,
      },
    },
  };
};

const inputInitialized = (state, action) => {
  console.log("Input initialized!");
  return {
    ...state,
    inputsSTR: {
      ...state.inputsSTR,
      [action.id]: {
        ...action.payload,
      },
    },
  };
};

const UserInputString = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STRING_INPUT_ENTERED:
      return onChange(state, action);
    case actionTypes.STRING_INPUT_INITIALIZED:
      return inputInitialized(state, action);
    default:
      return state;
  }
};

export default UserInputString;
