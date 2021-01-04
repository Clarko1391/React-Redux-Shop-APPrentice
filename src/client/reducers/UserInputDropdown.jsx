import actionTypes from "../actions/actionTypes";

const initialState = {};

const onChange = (state, action) => {
  // console.log("Input Changed!");
  return {
    ...state,
    inputsDropdown: {
      ...state.inputsDropdown,
      [action.id]: {
        ...action.payload
      },
    },
  };
};

const dropdownInitialized = (state, action) => {
  // console.log("Input initialized!");
  return {
    ...state,
    inputsDropdown: {
      ...state.inputsDropdown,
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
    case actionTypes.DROPDOWN_INITIALIZED:
      return dropdownInitialized(state, action);
    default:
      return state;
  }
};

export default UserInputNumeric;
