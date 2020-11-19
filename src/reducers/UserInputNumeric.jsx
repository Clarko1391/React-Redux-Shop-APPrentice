import actionTypes from "../actions/actionTypes";

const initialState = {};

const onChange = (state, action) => {
  console.log("Input Changed!");
  return {
    ...state,
    inputsNUM: {
      ...state.inputsNUM,
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
    inputsNUM: {
      ...state.inputsNUM,
      [action.id]: {
        ...action.payload
      },
    },
  };
};

const UserInputNumeric = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_ENTERED:
      return onChange(state, action);
    case actionTypes.NUMERIC_INPUT_INITIALIZED:
      return inputInitialized(state, action);
    default:
      return state;
  }
};

export default UserInputNumeric;