import { connect } from "react-redux";
import * as actions from "../actions/UserInputNumeric";
import React from "react";
import NumericInput from "react-numeric-input";
import { PropTypes } from "prop-types";
import "../components/css/UserInputNumeric.css";

const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  userInput: PropTypes.number,
};

class UserInputNumericContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    this.inputInitialized = props.inputInitialized.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.internalProps.onChange(this.internalProps, event);
  }

  componentDidMount(){
    this.inputInitialized(this.internalProps);
  }

  render() {
    return (
      <NumericInput
      placeholder={this.internalProps.placeHolder}
      className={this.internalProps.inputStyle}
      inputid={this.internalProps.inputId}
      onChange={e => this.onChange(e)}
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


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (props, event) => {
      dispatch(actions.onChange(props, event));
    },
    inputInitialized: (props) => {
      dispatch(actions.inputInitialized(props));
    }
  }
};

UserInputNumericContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UserInputNumericContainer);