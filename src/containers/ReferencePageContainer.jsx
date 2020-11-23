import { connect } from "react-redux";
import ReferencePage from "../components/ReferencePage";
import React from "react";
import * as actions from "../actions/ReferencePage";

class ReferenceManualContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // rebind functions to 'this' within the constructor, these functions are for local use
    this.chartInitialized = props.chartInitialized.bind(this);
  }

  componentDidMount() {
    this.chartInitialized(this.internalProps);
  }

  render() {
    return (
      <ReferencePage
        referenceId={this.internalProps.referenceId}
        referenceType={this.internalProps.referenceType}
        chartTitle={this.internalProps.chartTitle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    referenceId: state.userName,
    referenceType: state.isLogged,
    chartTitle: state.chartTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chartInitialized: (props) => {
      dispatch(actions.chartInitialized(props));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferenceManualContainer);
