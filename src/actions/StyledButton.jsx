import actionTypes from "./actionTypes";

export const buttonInitialized = (props) => {
  return {
    type: actionTypes.STYLED_BUTTON_INITIALIZED,
    id: props.buttonId,
    payload: {
      isNavButton: props.isNavButton,
      navigateTo: props.navigateTo,
      buttonTitlePrimary: props.buttonTitlePrimary,
      buttonTitleSecondary: props.buttonTitleSecondary,
    },
  };
};