import { connect } from "react-redux";
import ResultsOutput from "../components/ResultsOutput";
import React from "react";

class ResultsOutputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.converter = props.converter;
    this.calculator = props.calculator;
    this.header = props.header
    this.downMeasurement = props.downMeasurement;
    this.measurement = props.measurement;
    this.upMeasurement = props.upMeasurement
    this.decimalResult = props.decimalResult;
    this.fractionalResult = props.fractionalResult;


    // rebind functions to 'this' within the constructor, these functions are for local use
    // this.buttonClicked = props.buttonClicked.bind(this);
    // this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  // write local functions here, these are specifically for callback functions and dispatching actions to the reducer

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <ResultsOutput
      converter= {this.converter}
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