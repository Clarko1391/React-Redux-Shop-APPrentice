import actionTypes from "./actionTypes";

export const onChange = (props, value) => {
  return {
    type: actionTypes.NUMERIC_INPUT_ENTERED,
    id: props.inputId,
    payload: {
      placeHolder: props.placeHolder,
      value: props.value,
      inputStyle: props.inputStyle,
      userInput: value,
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
    },
  };
};