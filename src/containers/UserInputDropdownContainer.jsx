import { connect } from "react-redux";
import UserInputDropdown from "../components/UserInputDropdown";
import * as actions from "../actions/UserInputDropdown";
import React from "react";

class UserInputDropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    const defaultOption = props.inputOptions[0];


    this.inputOptions = [...props.inputOptions];
    this.inputStyle = props.inputStyle;
    this.inputId = props.inputId;
    this.defaultOption = defaultOption;

    props.dispatch(actions.dropdownInitialized(props));
  }

  render() {
    return (
      <UserInputDropdown
        inputOptions={this.inputOptions}
        defaultOption={this.defaultOption}
        inputStyle={this.inputStyle}
        inputId={this.inputId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputDropdown.inputsDropdown && state.UserInputDropdown.inputsDropdown[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputDropdown.inputsDropdown[ownProps.inputId] 
    };
  } else {
    return {
      ownProps
    };        
  }
};

// const mapStateToProps = (state) => {
//   return {
//     inputOptions: state.inputOptions,
//     defaultOption: state.defaultOption,
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

export default connect(mapStateToProps)(UserInputDropdownContainer);
