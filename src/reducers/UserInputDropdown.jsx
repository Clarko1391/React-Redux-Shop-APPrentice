import actionTypes from "../actions/actionTypes";

const initialState = {};

const inputEntered = (state, action) => {
  // console.log("Input Changed!");
  return Object.assign({}, state, {
    navigateTo: action.payload.buttonName,
  });
};

const dropdownInitialized = (state, action) => {
  console.log("Input initialized!");
  return {
    ...state,
    inputsDropdown: {
      ...state.inputsDropdown,
      [action.payload.inputId]: {
        defaultOption: action.payload.defaultOption,
        inputStyle: action.payload.inputStyle,
        inputOptions: action.payload.inputOptions,
      },
    },
  };
};

const UserInputNumeric = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_ENTERED:
      return inputEntered(state, action);
    case actionTypes.DROPDOWN_INITIALIZED:
      return dropdownInitialized(state, action);
    default:
      return state;
  }
};

export default UserInputNumeric;
