import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "../actions/Button";
import React from "react";

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonId: props.buttonId,
      buttonStyle: props.buttonStyle,
      isnavButton: props.isNavButton,
      navigateTo: props.navigateTo,
      buttonClicked: props.buttonClicked.bind(this),
    };
  }

  render() {
    return (
      <Button
        buttonId={this.buttonId}
        buttonStyle={this.buttonStyle}
        isNavButton={this.isNavButton}
        navigateTo={this.navigateTo}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    buttonId: state.Button.buttonId,
    buttonStyle: state.Button.buttonStyle,
    isNavButton: state.Button.isNavButton,
    navigateTo: state.Button.navigateTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClicked: (event) => {
      dispatch(actions.buttonClicked(event));
    },
    buttonInitialized: (props) => {
      dispatch(actions.buttonInitialized(props));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
