import React from "react";
// import { PropTypes } from "prop-types";
import styled from "styled-components";
import ButtonContainer from "../containers/ButtonContainer";
import UserInputDropdownContainer from "../containers/UserInputDropdownContainer";
import UserInputNumericContainer from "../containers/UserInputNumericContainer";
import ResultsOutputContainer from "../containers/ResultsOutputContainer";
import img from '../assets/img/left.png';

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

const dropdownOptions = [
  "mm to Inches", "Inches to mm"
];

// Functional Component
function MeasurementConverter() {
  return (
    <HeroContainer>
      <UIContainer>
        <UserInputDropdownContainer 
          inputId = "mcConversionInput"
          inputStyle = "dropdown"
          inputOptions = {dropdownOptions}
          placeholder = "select the units you wish to convert"
        />
      </UIContainer>
      <UIContainer >
        <UserInputNumericContainer 
            inputId="mcUserInput"
            inputStyle="test"
            placeHolder="Enter your measurement to convert"
        />
      </UIContainer>
      <UIContainer>
        <ButtonContainer
          buttonId="mcConvertButton"
          buttonStyle="calcButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Convert"
          buttonTitleSecondary=""
        />
        <ButtonContainer
          buttonId="mcClearButton"
          buttonStyle="calcButton"
          isNavButton={false}
          navigateTo=""
          buttonTitlePrimary="Clear"
          buttonTitleSecondary=""
        />
      </UIContainer>
      <OutputContainer >
          <ResultsOutputContainer 
            outputId="mcDecMMOutput"
            outputType="converter"
            header="Decimal (mm)"
            downMeasurement="-1"
            measurement="measurement"
            upMeasurement="+1"
            decimalResult=""
            fractionalResult=""
          />
          <ResultsOutputContainer 
            outputId="mcDecInchOutput"
            outputType="converter"
            header="Decimal (inch)"
            downMeasurement="-1"
            measurement="measurement"
            upMeasurement="+1"
            decimalResult=""
            fractionalResult=""
          />
          <ResultsOutputContainer 
            outputId="mcFracInchOutput"
            outputType="converter"
            header="Fractional"
            downMeasurement="-1"
            measurement="measurement"
            upMeasurement="+1"
            decimalResult=""
            fractionalResult=""
          />
      </OutputContainer>
      
    </HeroContainer>
  );
}

// MeasurementConverter.propTypes = propTypes;

export default MeasurementConverter;