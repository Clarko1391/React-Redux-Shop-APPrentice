import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";

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
  display: flex;
  justify-content: space-around;
`;

const SubTitle = styled.h3`
  color: #fcfbfc;
  font-size: 3vh;
  padding: 0px;
  margin: 0px;
`;

// PropTypes
const propTypes = {};

// Functional Component
function LoginPage() {
  return (
    <HeroContainer>
      <UIContainer>
        <SubTitle>UserName</SubTitle>
        <SubTitle>Password</SubTitle>
        <ButtonContainer
          buttonid="log-in-button"
          buttonstyle="LogButton"
          isnavbutton={false}
          navigateto=""
          buttonTitlePrimary="Log"
          buttonTitleSecondary="in"
        />
      </UIContainer>
    </HeroContainer>
  );
}

LoginPage.propTypes = propTypes;

export default LoginPage;
