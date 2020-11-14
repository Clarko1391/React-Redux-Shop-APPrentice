import { connect } from "react-redux";
import UserInputDropdown from "../components/UserInputDropdown";
import * as actions from "../actions/UserInputDropdown";
import React from "react";

class UserInputDropdownContainer extends React.Component {
  constructor(props) {
    super(props);

    const defaultOption = props.inputOptions[0];

    this.internalProps = props;
    this.defaultOption = defaultOption;

    this.dropdownInitialized = props.dropdownInitialized.bind(this);
  }

  componentDidMount() {
    this.dropdownInitialized(this.internalProps);
  }

  render() {
    return (
      <UserInputDropdown
        inputOptions={this.internalProps.inputOptions}
        defaultOption={this.defaultOption}
        inputStyle={this.internalProps.inputStyle}
        inputId={this.internalProps.inputId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (
    state.UserInputDropdown.inputsDropdown &&
    state.UserInputDropdown.inputsDropdown[ownProps.inputId]
  ) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputDropdown.inputsDropdown[ownProps.inputId],
    };
  } else {
    return {
      ownProps,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(actions.onChange(event));
    },
    dropdownInitialized: (props) => {
      dispatch(actions.dropdownInitialized(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInputDropdownContainer);
