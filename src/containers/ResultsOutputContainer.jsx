import { connect } from "react-redux";
import * as actions from "../actions/ResultsOutput";
import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

// CSS
const OutputBox = styled.div`
  width: 100%;
  height: 15vh;
  max-height: 120px;
  background-color: rgba(78, 77, 78, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  margin: 10px 0px;
`;
const OutputHeader = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 2.5vh;
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
  font-size: 2vh;
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

class ResultsOutputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // rebind functions to 'this' within the constructor, these functions are for local use
    this.outputInitialized = props.outputInitialized.bind(this);
  }

  componentDidMount(){
    this.outputInitialized(this.internalProps);
  }

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <OutputBox className={this.internalProps.outputId}>
      {/* Render only if 'outputType' is set to 'converter' */}
      {this.internalProps.outputType === 'converter' ? (
        <MeasurementOutput>
          <OutputHeader>{this.internalProps.header}</OutputHeader>
          <MeasurementContainer>
            <OutputMeasurement>{this.internalProps.downMeasurement}</OutputMeasurement>
            <OutputMeasurement>{this.internalProps.measurement}</OutputMeasurement>
            <OutputMeasurement>{this.internalProps.upMeasurement}</OutputMeasurement>
          </MeasurementContainer>
        </MeasurementOutput>
      ) : (
        ""
      )}
      {/* Render only if 'outputType' is set to 'calculator' */}
      {this.internalProps.outputType === 'calculator' ? (
        <CalculationOutput>
          <CalculationContainer>
            <OutputHeader>Decimal Result</OutputHeader>
            <OutputMeasurement>{this.internalProps.decimalResult}</OutputMeasurement>
          </CalculationContainer>
          <CalculationContainer>
            <OutputHeader>Fractional Result</OutputHeader>
            <OutputMeasurement>{this.internalProps.fractionalResult}</OutputMeasurement>
          </CalculationContainer>
        </CalculationOutput>
      ) : (
        ""
      )}
    </OutputBox>
    );
  }
}

// mapStateToProps will pull existing state from the store and connect it to this container
const mapStateToProps = (state, ownProps) => {
  if (state.ResultsOutput.outputs && state.ResultsOutput.outputs[ownProps.outputId]) {
    return {
      outputId: ownProps.outputId, 
      ...state.ResultsOutput.outputs[ownProps.outputId]
    };
  } else {
    return {
      ownProps,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    outputInitialized: (props) => {
      dispatch(actions.outputInitialized(props));
    }
  }
}

ResultsOutputContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ResultsOutputContainer);