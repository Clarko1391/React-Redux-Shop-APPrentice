import actionTypes from "../actions/actionTypes";

const initialState = {};

const inputEntered = (state, action) => {
  // console.log("Input Changed!");
  return Object.assign({}, state, {
    navigateTo: action.payload.buttonName,
  });
};

const checkBoxInitialized = (state, action) => {
  // console.log("Input initialized!");
  return {
    ...state,
    checkboxes: {
      ...state.checkboxes,
      [action.id]: {
        ...action.payload
      },
    },
  };
};

const UserInputCheckBox = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_ENTERED:
      return inputEntered(state, action);
    case actionTypes.CHECKBOX_INITIALIZED:
      return checkBoxInitialized(state, action);
    default:
      return state;
  }
};

export default UserInputCheckBox;