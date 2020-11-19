import { connect } from "react-redux";
import * as actions from "../actions/UserInputCheckBox";
import React from "react";
import { PropTypes } from "prop-types";
import "../components/css/UserInputCheckBox.css";

const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

class UserInputCheckBoxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    this.checkBoxInitialized = props.checkBoxInitialized.bind(this);
  }

  componentDidMount(){
    this.checkBoxInitialized(this.internalProps);
  }

  render() {
    return (
      <input
      type="checkbox"
      inputid={this.internalProps.inputId}
      className={this.internalProps.inputStyle}
      checked={this.internalProps.ticked}
      onChange={this.internalProps.onChange}
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


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(actions.onChange(event));
    },
    checkBoxInitialized: (props) => {
      dispatch(actions.checkBoxInitialized(props))
    }
  }
};

UserInputCheckBoxContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UserInputCheckBoxContainer)