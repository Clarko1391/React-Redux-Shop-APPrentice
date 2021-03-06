import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./css/Button.css";

const propTypes = {
  buttonId: PropTypes.string,
  buttonStyle: PropTypes.string,
  navigateTo: PropTypes.string,
  isNavButton: PropTypes.bool,
  buttonClicked: PropTypes.func,
  buttonTitlePrimary: PropTypes.string,
  buttonTitleSecondary: PropTypes.string,
};

function Button({
  buttonId,
  buttonStyle,
  buttonClicked,
  isNavButton,
  navigateTo,
  buttonTitlePrimary,
  buttonTitleSecondary,
}) {
  return (
    <button buttonid={buttonId} className={buttonStyle} onClick={buttonClicked ? () => buttonClicked : ''}>
      {buttonTitlePrimary}
      {buttonTitleSecondary}
      {isNavButton ? <Link className="buttonLink" to={navigateTo}></Link> : ""}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;


