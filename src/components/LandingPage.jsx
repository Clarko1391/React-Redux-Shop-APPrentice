import React from "react";
import { PropTypes } from "prop-types";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputCheckBoxContainer from '../containers/UserInputCheckBoxContainer';
import ResultsOutputContainer from '../containers/ResultsOutputContainer';

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
          buttonid="land-page-log-in-button"
          buttonstyle="logButton"
          isnavbutton={true}
          navigateto="/Login"
          buttonTitlePrimary="Log "
          buttonTitleSecondary="in"
        />
        <ButtonContainer
          buttonid="land-page-register-button"
          buttonstyle="logButton"
          isnavbutton={true}
          navigateto="/Registration"
          buttonTitlePrimary="Register "
          buttonTitleSecondary=""
        />
        <UserInputCheckBoxContainer 
          inputid="land-page-check-box"
          inputstyle="checkBox"
          checked={true}
        />
        <ResultsOutputContainer 
        outputid="land-page-output-test"
        header="testing output"
        downMeasurement="one down"
        measurement="on point"
        upMeasurement="one up"
        />
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
