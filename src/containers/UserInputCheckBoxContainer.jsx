import { connect } from "react-redux";
import UserInputCheckBox from "../components/UserInputCheckBox";
import * as actions from "../actions/UserInputCheckBox";
import React from "react";

class UserInputCheckBoxContainer extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      inputId: props.inputid,
      inputStyle: props.inputstyle,
      checked: props.checked,
    };

    this.inputId = props.inputid;
    this.inputStyle = props.inputstyle;
    this.checked = props.checked;

    props.dispatch(actions.checkBoxInitialized(initialState));
  }

  render() {
    return (
      <UserInputCheckBox
        inputId={this.inputId}
        inputStyle={this.inputStyle}
        checked={this.checked}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputId: state.inputId,
    inputStyle: state.inputStyle,
    checked: state.checked,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (event) => {
//       dispatch(actions.onChange(event));
//     },
// };

export default connect(mapStateToProps)(UserInputCheckBoxContainer);
