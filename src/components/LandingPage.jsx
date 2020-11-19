import React from "react";
import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
// import UserInputDropdownContainer from "../containers/UserInputDropdownContainer";

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

const Title = styled.h1`
  color: #fcfbfc;
  font-size: 4vh;
`;

const UIContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const SubTitle = styled.h3`
  color: #fcfbfc;
  font-size: 3vh;
  padding: 0px;
  margin: 0px;
`;
const TitleContainer = styled.div``;

const STContainer = styled.div`
  margin-bottom: 30px;
`;

// PropTypes
const propTypes = {
  isLogged: PropTypes.bool,
  userName: PropTypes.string,
};

const dropdownOptions = [
  "testing1", "testing2", "testing3"
];

// Functional Component
function LandingPage(props) {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title> Welcome </Title>
        {props.isLogged ? <span> {props.userName} </span> : ""}
      </TitleContainer>
      <UIContainer>
        <ButtonContainer
          buttonId="land-page-log-in-button"
          buttonStyle="logButton"
          isNavButton={true}
          navigateTo="/Login"
          buttonTitlePrimary="Log "
          buttonTitleSecondary="in"
        />
        <ButtonContainer
          buttonId="land-page-register-button"
          buttonStyle="logButton"
          isNavButton={true}
          navigateTo="/Registration"
          buttonTitlePrimary="Register "
          buttonTitleSecondary=""
        />
      </UIContainer>
      <UIContainer>
        {/* <UserInputDropdownContainer 
          inputId = "landing-dropdown-test"
          inputStyle = "dropdown"
          inputOptions = {dropdownOptions}
          placeholder = "select an option"
        /> */}
      {/* <ResultsOutputContainer
          outputId="land-page-output-test"
          outputType="converter"
          header="testing-output"
          downMeasurement="one-down"
          measurement="on-point"
          upMeasurement="one-up"
          decimalResult="test"
          fractionalResult="test"
        />
      </UIContainer>
      <UIContainer>
        <UserInputCheckBoxContainer 
            inputId="land-page-check-box"
            inputStyle="checkBox"
            checked={true}
        />
        <UserInputNumericContainer 
            
        />
        <UserInputStringContainer 
          inputId="land-page-string-test"
          inputStyle="test"
          placeHolder="test"
        /> */}
      </UIContainer>
      <SubTitle> or </SubTitle>
      <STContainer>
        <SubTitle> Select an option </SubTitle>
        <SubTitle>above to get started </SubTitle>
      </STContainer>
    </HeroContainer>
  );
}

LandingPage.propTypes = propTypes;

export default LandingPage;
