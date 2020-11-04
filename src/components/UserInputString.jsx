import React from "react";
import { PropTypes } from "prop-types";
import "./css/UserInputString.css";

const propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  inputStyle: PropTypes.string,
  inputId: PropTypes.string,
};

function UserInputString({placeHolder, value, onChange, inputStyle, inputId}) {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={() => onChange}
      className={inputStyle}
      inputid={inputId}
    />
  );
}

UserInputString.propTypes = propTypes;

export default UserInputString;
