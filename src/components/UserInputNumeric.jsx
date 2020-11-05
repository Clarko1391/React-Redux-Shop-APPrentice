import React from "react";
import NumericInput from "react-numeric-input";
import { PropTypes } from "prop-types";
import "./css/UserInputNumeric.css";

const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
};

function UserInputNumeric({
  placeHolder,
  onChange,
  inputStyle,
  inputId,
}) {
  return (
    <NumericInput
      placeholder={placeHolder}
      className={inputStyle}
      inputid={inputId}
      onChange={() => onChange}
    />
  );
}

UserInputNumeric.propTypes = propTypes;

export default UserInputNumeric;
