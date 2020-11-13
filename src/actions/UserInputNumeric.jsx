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
    type: actionTypes.NUMERIC_INPUT_INITIALIZED,
    id: props.inputId,
    payload: {
      placeHolder: props.placeHolder,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
    },
  };
};