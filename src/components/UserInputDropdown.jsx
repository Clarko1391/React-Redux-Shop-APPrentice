import React from "react";
import Dropdown from "react-dropdown";
import { PropTypes } from "prop-types";
import "./css/UserInputDropdown.css";

const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  inputOptions: PropTypes.array,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func,
};

function UserInputNumeric({ inputStyle, inputId, defaultOption, inputOptions, onChange }) {
  return (
    <Dropdown
      className={inputStyle}
      inputid={inputId}
      value={defaultOption}
      options={inputOptions}
      onChange={() => onChange}
    />
  );
}

UserInputNumeric.propTypes = propTypes;

export default UserInputNumeric;
