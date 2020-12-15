import actionTypes from "../actions/actionTypes";

const initialState = {};

const buttonInitialized = (state, action) => {
  return {
    ...state,
    styledButtons: {
      ...state.styledButtons,
      [action.id]: {
        ...action.payload
      }
    }
  };
};

const StyledButton = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STYLED_BUTTON_INITIALIZED:
      return buttonInitialized(state, action);
    default:
      return state;
  }
};

export default StyledButton;