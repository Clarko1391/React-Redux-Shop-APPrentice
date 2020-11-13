import { connect } from "react-redux";
import UserInputNumeric from "../components/UserInputNumeric";
import * as actions from "../actions/UserInputNumeric";
import React from "react";

class UserInputNumericContainer extends React.Component {
  constructor(props) {
    super(props);

    this.placeHolder = props.placeHolder;
    this.inputStyle = props.inputStyle;
    this.inputId = props.inputId;

    props.dispatch(actions.inputInitialized(props));
  }

  render() {
    return (
      <UserInputNumeric
        placeHolder={this.placeHolder}
        inputStyle={this.inputStyle}
        inputId={this.inputId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputNumeric.inputsNUM && state.UserInputNumeric.inputsNUM[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputNumeric.inputsNUM[ownProps.inputId] 
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

export default connect(mapStateToProps)(UserInputNumericContainer);