import actionTypes from "./actionTypes";

export const onChange = (event) => {
  return {
    type: actionTypes.INPUT_ENTERED,
    payload: {
      userInput: event.target.value,
    },
  };
};

export const dropdownInitialized = (props) => {
  return {
    type: actionTypes.DROPDOWN_INITIALIZED,
    payload: {
      inputId: props.inputId,
      inputOptions: props.inputOptions,
      defaultOption: props.defaultOption,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
    },
  };
};