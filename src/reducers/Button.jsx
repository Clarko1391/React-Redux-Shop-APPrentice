import actionTypes from "../actions/actionTypes";

const initialState = {
  buttonStyle: 'LogButton',
  isNavButton: false,
  navigateTo: "",
};

const buttonClicked = (state, action) => {
    console.log('Button clicked!');
  return Object.assign({}, state, {
    navigateTo: action.payload.buttonName,
  });
};

const Button = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_CLICKED:
      return buttonClicked(state, action);
    default:
      return state;
  }
};

export default Button;
