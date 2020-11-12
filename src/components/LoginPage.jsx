import React from "react";
// import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputStringContainer from '../containers/UserInputStringContainer';
import UserInputDropdownContainer from '../containers/UserInputDropdownContainer';

// CSS
const HeroContainer = styled.div`
  min-height: 85vh;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(56, 56, 56, 0.9),
    rgba(107, 43, 47, 0.8)
  );
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UIContainer = styled.div`
  width: 80%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// PropTypes
 const propTypes = {};

 //Define dropdown 'options' array
 const dropdownOptions = ['one', 'two', 'three'];

// Functional Component
function LoginPage() {
  return (
    <HeroContainer>
      <UIContainer>
        <UserInputStringContainer
          inputid="log-in-userName-input"
          inputstyle="userInputString"
          placeholder="enter your user name"
          value=""
        />
        <UserInputStringContainer
          inputid="log-in-password-input"
          inputstyle="userInputString"
          placeholder="enter your password"
          value=""
        />
        <UserInputDropdownContainer 
        inputid="log-in-dropdown-input"
        inputstyle="userInputDropdown"
        inputoptions={dropdownOptions}
        
        />
        <ButtonContainer
          buttonId="log-in-button"
          buttonStyle="logButton"
          isNavButton={true}
          navigateTo="/"
          buttonTitlePrimary="Log"
          buttonTitleSecondary=" in"
        />
      </UIContainer>
    </HeroContainer>
  );
}

LoginPage.propTypes = propTypes;

export default LoginPage;
