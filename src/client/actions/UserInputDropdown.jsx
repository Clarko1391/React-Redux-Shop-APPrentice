import actionTypes from "./actionTypes";

export const onChange = (props, value) => {
  return {
    type: actionTypes.INPUT_ENTERED,
    id: props.inputId,
    payload: {
      inputOptions: props.inputOptions,
      defaultOption: props.defaultOption,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
      userInput: value.value,
    },
  };
};

export const dropdownInitialized = (props) => {
  return {
    type: actionTypes.DROPDOWN_INITIALIZED,
    id: props.inputId,
    payload: {
      inputOptions: props.inputOptions,
      defaultOption: props.defaultOption,
      onChange: props.onChange,
      inputStyle: props.inputStyle,
    },
  };
};