import actionTypes from "./actionTypes";

export const buttonClicked = (event) => {
  return {
    type: actionTypes.BUTTON_CLICKED,
    payload: {
      buttonName: event.target.value,
    },
  };
};

export const buttonInitialized = (props) => {
  return {
    type: actionTypes.BUTTON_INITIALIZED,
    payload: {
      buttonId: props.buttonId,
      buttonStyle: props.buttonStyle,
      isNavButton: props.isNavButton,
      navigateTo: props.navigateTo,
      buttonTitlePrimary: props.buttonTitlePrimary,
        buttonTitleSecondary: props.buttonTitleSecondary,
    },
  };
};
