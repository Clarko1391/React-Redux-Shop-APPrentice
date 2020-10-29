import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./Button.css";

const propTypes = {
  buttonId: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  navigateTo: PropTypes.string,
  isNavButton: PropTypes.bool.isRequired,
  buttonClicked: PropTypes.func.isRequired,
};

function Button({
  buttonId,
  buttonStyle,
  buttonClicked,
  isNavButton,
  navigateTo,
}) {
  return (
    <div>
      <button
        buttonId={buttonId}
        className={buttonStyle}
        onClick={buttonClicked}
      >
        {isNavButton ? <Link to={navigateTo}></Link> : ""}
      </button>
    </div>
  );
}

Button.propTypes = propTypes;

export default Button;
