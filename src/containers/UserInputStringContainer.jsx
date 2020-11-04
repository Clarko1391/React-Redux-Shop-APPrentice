import { connect } from "react-redux";
import UserInputString from "../components/UserInputString";
import * as actions from "../actions/UserInputString";
import React from "react";

class UserInputStringContainer extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
        placeHolder: props.placeholder,
        value: props.value,
        inputStyle: props.inputstyle,
        inputId: props.inputid,
    };

    this.placeHolder = props.placeholder;
    this.value = props.value;
    this.inputStyle = props.inputstyle;
    this.inputId = props.inputid;

    props.dispatch(actions.inputInitialized(initialState));

    // rebind functions to 'this' within the constructor, these functions are for local use
    // this.buttonClicked = props.buttonClicked.bind(this);
    // this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  // write local functions here, these are specifically for callback functions and dispatching actions to the reducer

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <UserInputString
        placeHolder={this.placeHolder}
        value={this.value}
        inputStyle={this.inputStyle}
        inputId={this.inputId}
      />
    );
  }
}

// mapStateToProps will pull existing state from the store and connect it to this container
const mapStateToProps = (state) => {
  return {
    placeHolder: state.placeHolder,
    value: state.value,
    inputStyle: state.inputStyle,
    inputId: state.inputId,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (event) => {
//       dispatch(actions.onChange(event));
//     },
//     // inputInitialized: (props) => {
//     //   dispatch(actions.inputInitialized(props));
//     // },
//   };
// };

export default connect(mapStateToProps)(UserInputStringContainer);