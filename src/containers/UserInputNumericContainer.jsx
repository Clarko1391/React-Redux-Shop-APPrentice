import { connect } from "react-redux";
import UserInputNumeric from "../components/UserInputNumeric";
import * as actions from "../actions/UserInputNumeric";
import React from "react";

class UserInputNumericContainer extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
        placeHolder: props.placeholder,
        inputStyle: props.inputstyle,
        inputId: props.inputid,
    };

    this.placeHolder = props.placeholder;
    this.inputStyle = props.inputstyle;
    this.inputId = props.inputid;

    props.dispatch(actions.inputInitialized(initialState));
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

const mapStateToProps = (state) => {
  return {
    placeHolder: state.placeHolder,
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

export default connect(mapStateToProps)(UserInputNumericContainer);