import { connect } from "react-redux";
import * as actions from "../actions/UserInputString";
import React from "react";
import { PropTypes } from "prop-types";
import "../components/css/UserInputString.css";

const propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  inputStyle: PropTypes.string,
  inputId: PropTypes.string,
  userInput: PropTypes.string,
};

class UserInputStringContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    this.inputInitialized = props.inputInitialized.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.inputInitialized(this.internalProps);
  }

  onChange(event) {
    this.internalProps.onChange(this.internalProps, event);
  }

  render() {
    return (
      <input
        type="text"
        inputid={this.internalProps.inputId}
        className={this.internalProps.inputStyle}
        placeholder={this.internalProps.placeHolder}
        onChange={this.onChange}
        value={this.internalProps.value}
      />
    );
  }
}

 

  const mapStateToProps = (state, ownProps) => {
    // const userInput = state.UserInputString.inputsSTR[ownProps.inputId].userInput
    if (
      state.UserInputString.inputsSTR &&
      state.UserInputString.inputsSTR[ownProps.inputId]
    ) {
      return {
        inputId: ownProps.inputId,
        ...state.UserInputString.inputsSTR[ownProps.inputId],
      };
    } else {
      return {
        ownProps,
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
      },
    };
  };

  UserInputStringContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInputStringContainer);
