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
  }

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
// };

export default connect(mapStateToProps)(UserInputStringContainer);