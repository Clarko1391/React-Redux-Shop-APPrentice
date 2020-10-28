import React from "react";
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

function LandingPage(props) {
  return (
    <HeroContainer>
      <TitleContainer>
        <Title> Welcome </Title>
        {props.isLogged ? <span> {props.name} </span> : ""}
      </TitleContainer>
      <UIContainer>
        <ButtonContainer
          buttonStyle='LogButton'
          isNavButton={false}
          navigateTo=""
        >
          {" "}
          Log in{" "}
        </ButtonContainer>
        <ButtonContainer
          buttonStyle='LogButton'
          isNavButton={false}
          navigateTo=""
        >
          {" "}
          Register{" "}
        </ButtonContainer>
      </UIContainer>
      <SubTitle> or </SubTitle>
      <STContainer>
        <SubTitle> Select an option </SubTitle>
        <SubTitle>above to get started </SubTitle>
      </STContainer>
    </HeroContainer>
  );
}

export default LandingPage;
