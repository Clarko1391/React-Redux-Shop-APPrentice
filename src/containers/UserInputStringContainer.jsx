import { connect } from "react-redux";
import UserInputString from "../components/UserInputString";
import * as actions from "../actions/UserInputString";
import React from "react";

class UserInputStringContainer extends React.Component {
  constructor(props) {
    super(props);

    this.placeHolder = props.placeHolder;
    this.value = props.value;
    this.inputStyle = props.inputStyle;
    this.inputId = props.inputId;

    props.dispatch(actions.inputInitialized(props));
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

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputString.inputsSTR && state.UserInputString.inputsSTR[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputString.inputsSTR[ownProps.inputId] 
    };
  } else {
    return {
      ownProps
    };        
  }
};

// const mapStateToProps = (state) => {
//   return {
//     placeHolder: state.placeHolder,
//     value: state.value,
//     inputStyle: state.inputStyle,
//     inputId: state.inputId,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (event) => {
//       dispatch(actions.onChange(event));
//     },
// };

export default connect(mapStateToProps)(UserInputStringContainer);