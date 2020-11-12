import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "../actions/Button";
import React from "react";

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.buttonId = props.buttonId;
    this.buttonStyle = props.buttonStyle;
    this.isNavButton = props.isNavButton;
    this.navigateTo = props.navigateTo;
    this.buttonTitlePrimary = props.buttonTitlePrimary;
    this.buttonTitleSecondary = props.buttonTitleSecondary;

    props.dispatch(actions.buttonInitialized(props));

    // rebind functions to 'this' within the constructor, these functions are for local use
    // this.buttonClicked = props.buttonClicked.bind(this);
    // this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  // write local functions here, these are specifically for callback functions and dispatching actions to the reducer

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <Button
        buttonId={this.buttonId}
        buttonStyle={this.buttonStyle}
        isNavButton={this.isNavButton}
        navigateTo={this.navigateTo}
        buttonTitlePrimary={this.buttonTitlePrimary}
        buttonTitleSecondary={this.buttonTitleSecondary}
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buttonClicked: (event) => {
//       dispatch(actions.buttonClicked(event));
//     },
//     // buttonInitialized: (props) => {
//     //   dispatch(actions.buttonInitialized(props));
//     // },
//   };
// };

export default connect(mapStateToProps)(ButtonContainer);
