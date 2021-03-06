import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputStringContainer from '../containers/UserInputStringContainer';

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

const LineBreak = styled.div`
  width: 80%;
  border-bottom: 3px solid black;
`;

const TextContainer = styled.div`
`;

const TitleText1 = styled.h2`
  font-size: 3vh;
  color: #fcfbfc;
  padding: 0px;
  margin: 0px;
`;

// PropTypes
 const propTypes = {
  userLoginAttempt: PropTypes.func,
 };

// Functional Component
function LoginPage({userLoginAttempt = f => f}) {
  return (
    <HeroContainer>
      <UIContainer>
        <UserInputStringContainer
          inputId="loginUserName"
          inputStyle="userInputString"
          placeHolder="enter your user name"
        />
        <TextContainer>
          <TitleText1>OR</TitleText1>
        </TextContainer>
        <UserInputStringContainer
          inputId="loginEmail"
          inputStyle="userInputString"
          placeHolder="enter your email address"
        />
        <LineBreak />
        <UserInputStringContainer
          inputId="loginPassword"
          inputStyle="userInputString"
          placeHolder="enter your password"
        />
        <ButtonContainer
          buttonId="loginButton"
          buttonStyle="logButton"
          isNavButton={true}
          navigateTo="/"
          buttonTitlePrimary="Log"
          buttonTitleSecondary=" in"
          buttonClicked={userLoginAttempt}
        />
      </UIContainer>
    </HeroContainer>
  );
}

LoginPage.propTypes = propTypes;

export default LoginPage;
