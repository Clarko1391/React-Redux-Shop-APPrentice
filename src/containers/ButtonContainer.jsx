import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "../actions/Button";
import React from "react";

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // rebind functions to 'this' within the constructor, these functions are for local use
    this.buttonClicked = props.buttonClicked.bind(this);
    this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  componentDidMount(){
    this.buttonInitialized(this.internalProps);
  }

  // write local functions here, these are specifically for callback functions and dispatching actions to the reducer

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <Button
        buttonId={this.internalProps.buttonId}
        buttonStyle={this.internalProps.buttonStyle}
        isNavButton={this.internalProps.isNavButton}
        navigateTo={this.internalProps.navigateTo}
        buttonTitlePrimary={this.internalProps.buttonTitlePrimary}
        buttonTitleSecondary={this.internalProps.buttonTitleSecondary}
      />
    );
  }
}

// mapStateToProps will pull existing state from the store and connect it to this container
const mapStateToProps = (state, ownProps) => {
  if (state.Button.buttons && state.Button.buttons[ownProps.buttonId]) {
    return {
      buttonId: ownProps.buttonId,
      ...state.Button.buttons[ownProps.buttonId] 
    };
  } else {
    return {
      ownProps
    };        
  }
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
