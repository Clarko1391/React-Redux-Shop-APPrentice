import React from "react";
import { PropTypes } from "prop-types";
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

// PropTypes
const propTypes = {
  calculateValue: PropTypes.func,
};

const dropdownOptions = ["+", "-", "x", "/"];

// Functional Component
function FractionalCalculator({calculateValue = f => f, clearNumericInput1 = f => f, clearNumericInput2 = f => f, clearAll = f => f}) {
  return (
    <HeroContainer>
      <UIContainer>
        <UserInputNumericContainer
          inputId="fcInput1"
          inputStyle="test"
          placeHolder="Enter your first value"
        />
        <ButtonContainer
          buttonId="fcClear1"
          buttonStyle="resetButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="X"
          buttonTitleSecondary=""
          buttonClicked={clearNumericInput1}
        />
      </UIContainer>
      <UIDropdownContainer>
        <UserInputDropdownContainer
          inputId="fcCalculationInput"
          inputStyle="dropdown"
          inputOptions={dropdownOptions}
          placeholder="select an operator"
        />
      </UIDropdownContainer>
      <UIContainer>
        <UserInputNumericContainer
          inputId="fcInput2"
          inputStyle="test"
          placeHolder="Enter your second value"
        />
        <ButtonContainer
          buttonId="fcClear2"
          buttonStyle="resetButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="X"
          buttonTitleSecondary=""
          buttonClicked={clearNumericInput2}
        />
      </UIContainer>
      <UIContainer>
        <ButtonContainer
          buttonId="fcCalculateButton"
          buttonStyle="calcButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Convert"
          buttonTitleSecondary=""
          buttonClicked={calculateValue}
        />
        <ButtonContainer
          buttonId="fcClearButton"
          buttonStyle="calcButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Clear "
          buttonTitleSecondary="all"
          buttonClicked={clearAll}
        />
      </UIContainer>
      <OutputContainer>
        <ResultsOutputContainer
          outputId="fcResultsOutput"
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

FractionalCalculator.propTypes = propTypes;

export default FractionalCalculator;
