import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "../actions/Button";
import React from "react";

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      buttonId: props.buttonid,
      buttonStyle: props.buttonstyle,
      isNavButton: props.isnavbutton,
      navigateTo: props.navigateto,
      buttonTitlePrimary: props.buttonTitlePrimary,
      buttonTitleSecondary: props.buttonTitleSecondary,
    };

    this.buttonId = props.buttonid;
    this.buttonStyle = props.buttonstyle;
    this.isNavButton = props.isnavbutton;
    this.navigateTo = props.navigateto;
    this.buttonTitlePrimary = props.buttonTitlePrimary;
    this.buttonTitleSecondary = props.buttonTitleSecondary;

    props.dispatch(actions.buttonInitialized(initialState));

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
const mapStateToProps = (state) => {
  return {
    buttonId: state.buttonId,
    buttonStyle: state.buttonStyle,
    isNavButton: state.isNavButton,
    navigateTo: state.navigateTo,
  };
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
