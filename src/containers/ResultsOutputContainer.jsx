import { connect } from "react-redux";
import ResultsOutput from "../components/ResultsOutput";
import * as actions from "../actions/ResultsOutput";
import React from "react";

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
      <ResultsOutput
        outputId={this.internalProps.outputId}
        outputType={this.internalProps.outputType}
        header={this.internalProps.header}
        downMeasurement={this.internalProps.downMeasurement}
        measurement={this.internalProps.measurement}
        upMeasurement={this.internalProps.upMeasurement}
        decimalResult={this.internalProps.decimalResult}
        fractionalResult={this.internalProps.fractionalResult}
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

const mapDispatchToProps = (dispatch) => {
  return {
    outputInitialized: (props) => {
      dispatch(actions.outputInitialized(props));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsOutputContainer);