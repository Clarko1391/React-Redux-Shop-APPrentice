import actionTypes from "../actions/actionTypes";

const initialState = {};

const inputEntered = (state, action) => {
  // console.log("Input Changed!");
  return Object.assign({}, state, {
    navigateTo: action.payload.buttonName,
  });
};

const inputInitialized = (state, action) => {
  console.log("Input initialized!");
  return {
    ...state,
    inputsNUM: {
      ...state.inputsNUM,
      [action.payload.inputId]: {
        inputStyle: action.payload.inputStyle,
        placeHolder: action.payload.placeHolder,
      },
    },
  };
};

const UserInputNumeric = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_ENTERED:
      return inputEntered(state, action);
    case actionTypes.NUMERIC_INPUT_INITIALIZED:
      return inputInitialized(state, action);
    default:
      return state;
  }
};

export default UserInputNumeric;