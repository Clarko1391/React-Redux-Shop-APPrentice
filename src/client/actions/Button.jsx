import actionTypes from "./actionTypes";

export const buttonInitialized = (props) => {
  return {
    type: actionTypes.BUTTON_INITIALIZED,
    id: props.buttonId,
    payload: {
      buttonStyle: props.buttonStyle,
      isNavButton: props.isNavButton,
      navigateTo: props.navigateTo,
      buttonTitlePrimary: props.buttonTitlePrimary,
      buttonTitleSecondary: props.buttonTitleSecondary,
      buttonClicked: props.buttonClicked
    },
  };
};
