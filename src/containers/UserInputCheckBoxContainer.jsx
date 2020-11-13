import { connect } from "react-redux";
import UserInputCheckBox from "../components/UserInputCheckBox";
import * as actions from "../actions/UserInputCheckBox";
import React from "react";

class UserInputCheckBoxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.inputId = props.inputId;
    this.inputStyle = props.inputStyle;
    this.checked = props.checked;

    props.dispatch(actions.checkBoxInitialized(props));
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

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputCheckBox.checkboxes && state.UserInputCheckBox.checkboxes[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputCheckBox.checkboxes[ownProps.inputId] 
    };
  } else {
    return {
      ownProps
    };        
  }
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChange: (event) => {
//       dispatch(actions.onChange(event));
//     },
// };

export default connect(mapStateToProps)(UserInputCheckBoxContainer);
