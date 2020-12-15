import actionTypes from "./actionTypes";

export const onChange = (props, event) => {
  return {
    type: actionTypes.STRING_INPUT_ENTERED,
    id: props.inputId,
    payload: {
      placeHolder: props.placeHolder,
      value: props.value,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
      userInput: event.target.value,
    },
  };
};

export const inputInitialized = (props) => {
  return {
    type: actionTypes.STRING_INPUT_INITIALIZED,
    id: props.inputId,
    payload: {
      placeHolder: props.placeHolder,
      value: props.value,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
    },
  };
};
