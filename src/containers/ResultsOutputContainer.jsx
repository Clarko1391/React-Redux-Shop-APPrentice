import { connect } from "react-redux";
import ResultsOutput from "../components/ResultsOutput";
import * as actions from "../actions/ResultsOutput";
import React from "react";

class ResultsOutputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.outputId = props.outputId;
    this.outputType = props.outputType;
    this.header = props.Header;
    this.downMeasurement = props.downMeasurement;
    this.measurement = props.Measurement;
    this.upMeasurement = props.upMeasurement;
    this.decimalResult = props.decimalResult;
    this.fractionalResult = props.fractionalResult;

    props.dispatch(actions.outputInitialized(props));
    // rebind functions to 'this' within the constructor, these functions are for local use
    // this.buttonClicked = props.buttonClicked.bind(this);
    // this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <ResultsOutput
        outputId={this.outputId}
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

export default connect(mapStateToProps)(ResultsOutputContainer);
