import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
// CSS
const OutputBox = styled.div`
  width: 80%;
  height: 15vh;
  max-height: 120px;
  background-color: rgba(78, 77, 78, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
`;
const OutputHeader = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 2vh;
  color: #fcfbfc;
`;
const MeasurementOutput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const MeasurementContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const CalculationOutput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const CalculationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const OutputMeasurement = styled.h3`
  padding: 0px;
  padding-top: 10px;
  margin: 0px;
  font-size: 1.5vh;
  color: #fcfbfc;
`;

// Proptypes
const propTypes = {
  outputId: PropTypes.string,
  outputType: PropTypes.string,
  header: PropTypes.string,
  downMeasurement: PropTypes.string,
  measurement: PropTypes.string,
  upMeasurement: PropTypes.string,
  decimalResult: PropTypes.string,
  fractionalResult: PropTypes.string,
};

function ResultsOutput({
  outputId,
  outputType,
  header,
  downMeasurement,
  measurement,
  upMeasurement,
  decimalResult,
  fractionalResult,
}) {
  return (
    <OutputBox className={outputId}>
      {/* Render only if 'outputType' is set to 'converter' */}
      {outputType === 'converter' ? (
        <MeasurementOutput>
          <OutputHeader>{header}</OutputHeader>
          <MeasurementContainer>
            <OutputMeasurement>{downMeasurement}</OutputMeasurement>
            <OutputMeasurement>{measurement}</OutputMeasurement>
            <OutputMeasurement>{upMeasurement}</OutputMeasurement>
          </MeasurementContainer>
        </MeasurementOutput>
      ) : (
        ""
      )}
      {/* Render only if 'outputType' is set to 'calculator' */}
      {outputType === 'calculator' ? (
        <CalculationOutput>
          <CalculationContainer>
            <OutputHeader>Decimal Result</OutputHeader>
            <OutputMeasurement>{decimalResult}</OutputMeasurement>
          </CalculationContainer>
          <CalculationContainer>
            <OutputHeader>Fractional Result</OutputHeader>
            <OutputMeasurement>{fractionalResult}</OutputMeasurement>
          </CalculationContainer>
        </CalculationOutput>
      ) : (
        ""
      )}
    </OutputBox>
  );
}

ResultsOutput.propTypes = propTypes;

export default ResultsOutput;
