import { connect } from "react-redux";
import UserInputDropdown from "../components/UserInputDropdown";
import * as actions from "../actions/UserInputDropdown";
import React from "react";

class UserInputDropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    const defaultOption = props.inputoptions[0];

    const initialState = {
      inputOptions: [...props.inputoptions],
      defaultOption: defaultOption,
      inputStyle: props.inputstyle,
      inputId: props.inputid,
    };


    this.inputOptions = [...props.inputoptions];
    this.inputStyle = props.inputstyle;
    this.inputId = props.inputid;
    this.defaultOption = defaultOption;

    props.dispatch(actions.dropdownInitialized(initialState));
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

const mapStateToProps = (state) => {
  return {
    inputOptions: state.inputOptions,
    defaultOption: state.defaultOption,
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

export default connect(mapStateToProps)(UserInputDropdownContainer);
