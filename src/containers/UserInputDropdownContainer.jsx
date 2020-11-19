import { connect } from "react-redux";
import * as actions from "../actions/UserInputDropdown";
import React from "react";
import Dropdown from "react-dropdown";
import { PropTypes } from "prop-types";
import "../components/css/UserInputDropdown.css";

const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  inputOptions: PropTypes.array,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func,
};

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
      <Dropdown
      className={this.internalProps.inputStyle}
      inputid={this.internalProps.inputId}
      value={this.internalProps.defaultOption}
      options={this.internalProps.inputOptions}
      onChange={this.internalProps.onChange}
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

UserInputDropdownContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UserInputDropdownContainer);
