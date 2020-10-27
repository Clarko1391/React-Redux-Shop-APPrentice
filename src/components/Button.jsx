import React from "react";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";
import './Button.css';

const propTypes = {
  buttonStyle: PropTypes.string.isRequired,
  navigateTo: PropTypes.string,
  isNavButton: PropTypes.bool.isRequired,
  buttonClicked: PropTypes.func.isRequired,
};

function Button( {buttonStyle, buttonClicked, isNavButton, navigateTo} ) {
  return (
    <div>
      <button className={buttonStyle} onClick={buttonClicked}>
        {isNavButton ? <Link to={navigateTo} ></Link> : ''}
      </button>
    </div>
  );
}

Button.propTypes = propTypes;

export default Button;
