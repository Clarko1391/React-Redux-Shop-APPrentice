import { connect } from "react-redux";
import ResultsOutput from "../components/ResultsOutput";
import * as actions from "../actions/ResultsOutput";
import React from "react";

class ResultsOutputContainer extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      outputId: props.outputid,
      outputType: props.outputtype,
      header: props.Header,
      downMeasurement: props.downmeasurement,
      measurement: props.Measurement,
      upMeasurement: props.upmeasurement,
      decimalResult: props.decimalresult,
      fractionalResult: props.fractionalresult
    };

    this.outputId = props.outputid;
    this.outputType = props.outputtype;
    this.header = props.Header;
    this.downMeasurement = props.downmeasurement;
    this.measurement = props.Measurement;
    this.upMeasurement = props.upmeasurement;
    this.decimalResult = props.decimalresult;
    this.fractionalResult = props.fractionalresult;
    
    props.dispatch(actions.outputInitialized(initialState));
    // rebind functions to 'this' within the constructor, these functions are for local use
    // this.buttonClicked = props.buttonClicked.bind(this);
    // this.buttonInitialized = props.buttonInitialized.bind(this);
  }


  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <ResultsOutput
        outputid={this.outputId}
        outputType={this.outputType}
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
    outputType: state.outputType,
    header: state.header,
    downMeasurement: state.downMeasurement,
    measurement: state.measurement,
    upMeasurement: state.upMeasurement,
    decimalResult: state.decimalResult,
    fractionalResult: state.fractionalResult,
  };
};

export default connect(mapStateToProps)(ResultsOutputContainer);
