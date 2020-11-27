import actionTypes from "./actionTypes";

export const onChange = (props, event) => {
  return {
    type: actionTypes.NUMERIC_INPUT_ENTERED,
    id: props.inputId,
    payload: {
      placeHolder: props.placeHolder,
      value: props.value,
      inputStyle: props.inputStyle,
      userInput: event.target.value,
    },
  };
};

export const inputCleared = (id, clearValue) => {
  return {
    type: actionTypes.INPUT_CLEARED,
    id: id,
    payload: {
      userInput: clearValue,
    },
  };
};

export const inputInitialized = (props) => {
  return {
    type: actionTypes.NUMERIC_INPUT_INITIALIZED,
    id: props.inputId,
    payload: {
      placeHolder: props.placeHolder,
      inputStyle: props.inputStyle,
      userInput: "",
    },
  };
};
