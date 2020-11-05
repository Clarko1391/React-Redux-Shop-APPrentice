import actionTypes from "./actionTypes";

export const onChange = (event) => {
  return {
    type: actionTypes.INPUT_ENTERED,
    payload: {
      userInput: event.target.value,
    },
  };
};

export const inputInitialized = (props) => {
  return {
    type: actionTypes.STRING_INPUT_INITIALIZED,
    payload: {
      inputId: props.inputId,
      placeHolder: props.placeHolder,
      value: props.value,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
    },
  };
};