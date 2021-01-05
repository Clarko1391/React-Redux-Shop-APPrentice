import React from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputStringContainer from "../containers/UserInputStringContainer";

//CSS
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
  justify-content: space-evenly;
  align-items: center;
`;

const UIContainer = styled.div`
  width: 80%;
  height: 72.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
`;

const TitleText1 = styled.h2`
  font-size: 3vh;
  color: #fcfbfc;
  padding: 0px;
  margin: 0px;
`;

const TitleText2 = styled.h2`
  font-size: 3vh;
  color: #fcfbfc;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

// PropTypes
const propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  buttonClicked: PropTypes.func,
};

function RegistrationPage( {userRegistrationCompleted = f => f, isLogged} ) {
  return (
    <HeroContainer>
      { !isLogged ? 
      (<UIContainer>
        <TextContainer>
          <TitleText1>Create an account to</TitleText1>
          <TitleText2>unlock more features!</TitleText2>
        </TextContainer>
        <UserInputStringContainer
          inputId="regisNameInput"
          inputStyle="userInputString"
          placeHolder="enter a user name"
        />
        <UserInputStringContainer
          inputId="regisEmailInput"
          inputStyle="userInputString"
          placeHolder="enter a valid email address"
        />
        <UserInputStringContainer
          inputId="regisPasswordInput1"
          inputStyle="userInputString"
          placeHolder="enter a password"
        />
        <UserInputStringContainer
          inputId="regisPasswordInput2"
          inputStyle="userInputString"
          placeHolder="confirm your password"
        />
        <ButtonContainer
          buttonId="regisButton"
          buttonStyle="logButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Register"
          buttonTitleSecondary=""
          buttonClicked={userRegistrationCompleted}
        />
      </UIContainer>) : (
      <UIContainer>
        <TextContainer>
          <TitleText1>Account created successfully</TitleText1>
          <TitleText2>Select an option above to get started</TitleText2>
        </TextContainer>
        <ButtonContainer
          buttonId="settingsButton"
          buttonStyle="logButton"
          isNavButton={true}
          navigateTo="/UserSettings"
          buttonTitlePrimary="Customize your profile"
          buttonTitleSecondary=""
          buttonClicked={userRegistrationCompleted}
        />
      </UIContainer>) }
    </HeroContainer>
  );
}

RegistrationPage.propTypes = propTypes;

export default RegistrationPage;
