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
const MeasurementContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const OutputMeasurement = styled.h3`
  padding: 0px;
  margin: 0px;
  font-size: 1.5vh;
  color: #fcfbfc;
`;

// Proptypes
const propTypes = {
  outputid: PropTypes.string,
  converter: PropTypes.bool,
  calculator: PropTypes.bool,
  header: PropTypes.string,
  downMeasurement: PropTypes.string,
  measurement: PropTypes.string,
  upMeasurement: PropTypes.string,
  decimalResult: PropTypes.string,
  fractionalResult: PropTypes.string,
};

function ResultsOutput({
  outputid,
  converter,
  calculator,
  header,
  downMeasurement,
  measurement,
  upMeasurement,
  decimalResult,
  fractionalResult,
}) {
  return (
    <OutputBox className={outputid}>
      {/* Render only if 'converter' is true */}
      {converter ? (
        <div>
          <OutputHeader>{header}</OutputHeader>
          <MeasurementContainer>
            <OutputMeasurement>{downMeasurement}</OutputMeasurement>
            <OutputMeasurement>{measurement}</OutputMeasurement>
            <OutputMeasurement>{upMeasurement}</OutputMeasurement>
          </MeasurementContainer>
        </div>
      ) : (
        ""
      )}
      {/* Render only if 'calculator' is true */}
      {calculator ? (
        <div>
          <MeasurementContainer>
            <OutputHeader>Decimal Result</OutputHeader>
            <OutputMeasurement>{decimalResult}</OutputMeasurement>
          </MeasurementContainer>
          <MeasurementContainer>
            <OutputHeader>Fractional Result</OutputHeader>
            <OutputMeasurement>{fractionalResult}</OutputMeasurement>
          </MeasurementContainer>
        </div>
      ) : (
        ""
      )}
    </OutputBox>
  );
}

ResultsOutput.propTypes = propTypes;

export default ResultsOutput;
