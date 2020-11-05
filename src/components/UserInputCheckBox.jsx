import React from "react";
import { PropTypes } from "prop-types";
import "./css/UserInputCheckBox.css";

const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

function UserInputCheckBox({ onChange, inputStyle, inputId, ticked }) {
  return (
    <input
      type="checkbox"
      inputid={inputId}
      className={inputStyle}
      checked={ticked}
      onChange={() => onChange}
    />
  );
}

UserInputCheckBox.propTypes = propTypes;

export default UserInputCheckBox;
