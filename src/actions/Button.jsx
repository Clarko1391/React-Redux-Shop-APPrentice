import actionTypes from "./actionTypes";

export const buttonClicked = (event) => {
  return {
    type: actionTypes.BUTTON_CLICKED,
    payload: {
      buttonName: event.target.value,
    },
  };
};

// export const intiializeButton
