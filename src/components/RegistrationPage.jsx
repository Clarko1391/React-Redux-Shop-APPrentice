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

function RegistrationPage() {
  return (
    <HeroContainer>
      <UIContainer>
        <TextContainer>
          <TitleText1>Create an account to</TitleText1>
          <TitleText2>unlock access to more features!</TitleText2>
        </TextContainer>
        <UserInputStringContainer
          inputid="reg-username-input"
          inputstyle="userInputString"
          placeholder="enter a user name"
          value=""
        />
        <UserInputStringContainer
          inputid="reg-email-address-input"
          inputstyle="userInputString"
          placeholder="enter a valid email address"
          value=""
        />
        <UserInputStringContainer
          inputid="reg-password-input"
          inputstyle="userInputString"
          placeholder="enter a password"
          value=""
        />
        <UserInputStringContainer
          inputid="reg-confirm-password-input"
          inputstyle="userInputString"
          placeholder="confirm your password"
          value=""
        />
        <ButtonContainer
          buttonid="reg-button"
          buttonstyle="logButton"
          isnavbutton={false}
          navigateto="/"
          buttonTitlePrimary="Register"
          buttonTitleSecondary=""
        />
      </UIContainer>
    </HeroContainer>
  );
}

RegistrationPage.propTypes = propTypes;

export default RegistrationPage;
