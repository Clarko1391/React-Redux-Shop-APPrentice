import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import ButtonContainer from '../containers/ButtonContainer';

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
  justify-content: space-around;
  align-items: center;
`;

const TextContainer = styled.div`
    width: 80%;
`

const TitleText = styled.h2`
    font-size: 3vh;
    color: #fcfbfc;
`
const SubText = styled.h4`
    font-size: 1.5vh;
    color: #fcfbfc;
`

// PropTypes
const propTypes = {
    userName: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired,
    buttonClicked: PropTypes.func.isRequried,
  };

function RegistrationPage() {
    return (
        <HeroContainer >
            <TextContainer >
                <TitleText>Create an Account to</TitleText>
                <TitleText>unlock access to more features!</TitleText>
                <SubText >Add your own Reference Manual Charts</SubText>
                <SubText >Choose which charts you see</SubText>
                <SubText >Request new features from the developer</SubText>
            </TextContainer>
            {/* <EmailAddressField />
            <UserNameField />
            <UserPasswordField />
            <UserPasswordValidate /> */}
            <ButtonContainer />
        </HeroContainer>
    )
}

RegistrationPage.propTypes = propTypes;

export default RegistrationPage
