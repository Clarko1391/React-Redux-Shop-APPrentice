import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputCheckBoxContainer from "../containers/UserInputCheckBoxContainer";
// CSS
const HeroContainer = styled.div`
  height: 85vh;
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
const UserName = styled.h1`
  color: #DA1622;
`;
const OptionsPrimary = styled.h2`
  color: #fcfbfc;
  font-size: 3vh;
  padding: 0px;
  margin: 10px 0px;
`;
const OptionsSecondary = styled.h3`
  color: #fcfbfc;
  font-size: 1.5vh;
  padding: 0px 5px;
`;
const OptionContainer = styled.div`
  width: 100%;
  padding: 0px 5% 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const OptionContainerSecondary = styled.div`
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddBtnContainer = styled.div`
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrimaryBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const OptionBox = styled.div`
  width: 100%;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const OptionBoxHeader = styled.h2`
  color: #fcfbfc;
  font-size: 3vh;
  margin: 10px;
  padding: 0px 10px;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
`;

const LineBreak = styled.div`
  width: 80%;
  border-bottom: 3px solid black;
`;

const propTypes = {
  userName: PropTypes.string,
  isLogged: PropTypes.bool,
};

function UserSettings({ userName, isLogged, userLogout = f => f }) {
  return (
    <HeroContainer>
      <UserName>
        {isLogged ? `Welcome ${userName}, customize your preferences` : "log in to customize your app"}
      </UserName>
      <AddBtnContainer>
        {isLogged ? 
        (<ButtonContainer 
          buttonId="uspLogoutBtn"
          buttonStyle="logButton"
          isNavButton={true}
          navigateTo="/"
          buttonTitlePrimary="Log Out"
          buttonTitleSecondary=""
          buttonClicked={userLogout} 
          />)
        : ""}
      </AddBtnContainer>
      <PrimaryBox>
        <OptionContainer>
          <OptionsPrimary>Stay Logged In:</OptionsPrimary>
          <UserInputCheckBoxContainer
            inputId="land-page-check-box"
            inputStyle="checkBox"
            checked={true}
          />
        </OptionContainer>
      </PrimaryBox>
      <LineBreak />
      <PrimaryBox>
        <OptionBoxHeader>Reference Charts</OptionBoxHeader>
        <OptionBox>
          <OptionContainerSecondary>
            <OptionsSecondary>Tap and Die Chart</OptionsSecondary>
            <UserInputCheckBoxContainer
              inputId="tap-checkbox"
              inputStyle="checkBox"
              checked={true}
            />
          </OptionContainerSecondary>
          <OptionContainerSecondary>
            <OptionsSecondary>Wrench Size Chart</OptionsSecondary>
            <UserInputCheckBoxContainer
              inputId="wrench-checkbox"
              inputStyle="checkBox"
              checked={true}
            />
          </OptionContainerSecondary>
          <OptionContainerSecondary>
            <OptionsSecondary>Drill Bit Size Chart</OptionsSecondary>
            <UserInputCheckBoxContainer
              inputId="drill-checkbox"
              inputStyle="checkBox"
              checked={true}
            />
          </OptionContainerSecondary>
          <OptionContainerSecondary>
            <OptionsSecondary>Custom Chart 1</OptionsSecondary>
            <UserInputCheckBoxContainer
              inputId="custom-1-checkbox"
              inputStyle="checkBox"
              checked={true}
            />
          </OptionContainerSecondary>
          <OptionContainerSecondary>
            <OptionsSecondary>Custom Chart 2</OptionsSecondary>
            <UserInputCheckBoxContainer
              inputId="custom-2-checkbox"
              inputStyle="checkBox"
              checked={true}
            />
          </OptionContainerSecondary>
          <AddBtnContainer>
            <ButtonContainer
              buttonId="uspAddBtn"
              buttonStyle="backButton"
              isNavButton={false}
              navigateTo=""
              buttonTitlePrimary="Add More"
              buttonTitleSecondary=""
            />
          </AddBtnContainer>
        </OptionBox>
      </PrimaryBox>
    </HeroContainer>
  );
}

UserSettings.propTypes = propTypes;

export default UserSettings;
