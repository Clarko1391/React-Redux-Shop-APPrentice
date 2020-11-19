import React from "react";
// import { PropTypes } from "prop-types";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputDropdownContainer from "../containers/UserInputDropdownContainer";
import UserInputNumericContainer from "../containers/UserInputNumericContainer";
import ResultsOutputContainer from "../containers/ResultsOutputContainer";
import img from "../assets/img/right.png";

// CSS
const HeroContainer = styled.div`
  min-height: 85vh;
  width: 100%;
  background: url(${img}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const UIContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: space-around;
`;
const UIDropdownContainer = styled.div`
  width: 20%;
  padding-top: 20px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const OutputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// // PropTypes
// const propTypes = {
//   isLogged: PropTypes.bool,
//   userName: PropTypes.string,
// };

const dropdownOptions = ["+", "-", "x", "/"];

// Functional Component
function MeasurementConverter() {
  return (
    <HeroContainer>
      <UIContainer>
        <UserInputNumericContainer
          inputId="fc-numeric-input-1"
          inputStyle="test"
          placeHolder="Enter your first value"
        />
        <ButtonContainer
          buttonId="fc-clear-1"
          buttonStyle="resetButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="X"
          buttonTitleSecondary=""
        />
      </UIContainer>
      <UIDropdownContainer>
        <UserInputDropdownContainer
          inputId="fc-calculation-input"
          inputStyle="dropdown"
          inputOptions={dropdownOptions}
          placeholder="select an operator"
        />
      </UIDropdownContainer>
      <UIContainer>
        <UserInputNumericContainer
          inputId="fc-numeric-input-2"
          inputStyle="test"
          placeHolder="Enter your second value"
        />
        <ButtonContainer
          buttonId="fc-clear-2"
          buttonStyle="resetButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="X"
          buttonTitleSecondary=""
        />
      </UIContainer>
      <UIContainer>
        <ButtonContainer
          buttonId="mc-convert-button"
          buttonStyle="calcButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Convert"
          buttonTitleSecondary=""
        />
        <ButtonContainer
          buttonId="mc-clear-button"
          buttonStyle="calcButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Clear"
          buttonTitleSecondary=""
        />
      </UIContainer>
      <OutputContainer>
        <ResultsOutputContainer
          outputId="mc-dec-mm-output"
          outputType="calculator"
          header="Results"
          downMeasurement=""
          measurement=""
          upMeasurement=""
          decimalResult="Decimal Result"
          fractionalResult="Fractional Result"
        />
      </OutputContainer>
    </HeroContainer>
  );
}

// MeasurementConverter.propTypes = propTypes;

export default MeasurementConverter;
