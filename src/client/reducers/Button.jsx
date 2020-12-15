import actionTypes from "../actions/actionTypes";

const initialState = {};

const buttonClicked = (state, action) => {
  // console.log("Button clicked!");
  return Object.assign({}, state, {
    navigateTo: action.payload.buttonName,
  });
};

const buttonInitialized = (state, action) => {
  console.log("Button initialized!");
  return {
    ...state,
    buttons: {
      ...state.buttons,
      [action.id]: {
        ...action.payload
      }
    }
  };
};

const Button = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_CLICKED:
      return buttonClicked(state, action);
    case actionTypes.BUTTON_INITIALIZED:
      return buttonInitialized(state, action);
    default:
      return state;
  }
};

export default Button;
