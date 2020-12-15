import actionTypes from "./actionTypes";

export const onChange = (event) => {
  return {
    type: actionTypes.INPUT_ENTERED,
    payload: {
      userInput: event.target.value,
    },
  };
};

export const checkBoxInitialized = (props) => {
  return {
    type: actionTypes.CHECKBOX_INITIALIZED,
    id: props.inputId,
    payload: {
      inputStyle: props.inputStyle,
      checked: props.checked,
      onChange: props.onChange,
    },
  };
};