import { connect } from "react-redux";
import ResultsOutput from "../components/ResultsOutput";
import * as actions from "../actions/ResultsOutput";
import React from "react";

class ResultsOutputContainer extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      outputId: props.outputid,
      converter: props.converter,
      calculator: props.calculator,
      header: props.header,
      downMeasurement: props.downMeasurement,
      measurement: props.measurement,
      upMeasurement: props.upMeasurement,
      decimalResult: props.decimalResult,
      fractionalResult: props.fractionalResult,
    };

    this.outputId = props.outputid;
    this.converter = props.converter;
    this.calculator = props.calculator;
    this.header = props.header;
    this.downMeasurement = props.downMeasurement;
    this.measurement = props.measurement;
    this.upMeasurement = props.upMeasurement;
    this.decimalResult = props.decimalResult;
    this.fractionalResult = props.fractionalResult;

    props.dispatch(actions.outputInitialized(initialState));
  }


  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <ResultsOutput
        outputid={this.outputId}
        converter={this.converter}
        calculator={this.calculator}
        header={this.header}
        downMeasurement={this.downMeasurement}
        measurement={this.measurement}
        upMeasurement={this.upMeasurement}
        decimalResult={this.decimalResult}
        fractionalResult={this.fractionalResult}
      />
    );
  }
}

// mapStateToProps will pull existing state from the store and connect it to this container
const mapStateToProps = (state) => {
  return {
    outputId: state.outputId,
    converter: state.converter,
    calculator: state.calculator,
    header: state.header,
    downMeasurement: state.downMeasurement,
    measurement: state.measurement,
    upMeasurement: state.upMeasurement,
    decimalResult: state.decimalResult,
    fractionalResult: state.fractionalResult,
  };
};

export default connect(mapStateToProps)(ResultsOutputContainer);
