import { connect } from "react-redux";
import * as actions from "../actions/UserInputNumeric";
import React from "react";
// import NumericInput from "react-numeric-input";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import "../components/css/UserInputNumeric.css";
import deepClone from "lodash.clonedeep";

// CSS
const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #da1622;
  border: none;
  border-radius: 2px;
  color: #383838;
  text-align: center;
  padding: auto 0px;
  margin: 0px;
  font-size: 2vh;
  &::placeholder {
    color: #c4d0dc;
    text-align: center;
    font-size: 2vh;
  }

  &:focus {
    outline: none;
  }
`;

//PropTypes
const propTypes = {
  inputId: PropTypes.string,
  inputStyle: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  userInput: PropTypes.string,
};

class UserInputNumericContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = deepClone(props);

    this.inputInitialized = props.inputInitialized.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.internalProps.onChange(this.internalProps, event);
  }

  componentDidMount() {
    this.inputInitialized(this.internalProps);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userInput !== this.internalProps.inputValue) {
      console.log("userInput has changed!");
      this.internalProps.inputValue = nextProps.userInput;
    }
    return true;
  }

  render() {
    return (
      <Input
        type="text"
        placeholder={this.internalProps.placeHolder}
        inputid={this.internalProps.inputId}
        onChange={this.onChange}
        value={this.internalProps.inputValue}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let inputValue = '';
  if (state.UserInputNumeric.inputsNUM &&
      state.UserInputNumeric.inputsNUM[ownProps.inputId].userInput) {
        inputValue = (state.UserInputNumeric.inputsNUM[ownProps.inputId].userInput).toString();
      }
  return {
    inputValue: inputValue,
  }
  // if (
  //   state.UserInputNumeric.inputsNUM &&
  //   state.UserInputNumeric.inputsNUM[ownProps.inputId]
  // ) {
  //   return {
  //     buttonId: ownProps.inputId,
  //     ...state.UserInputNumeric.inputsNUM[ownProps.inputId],
  //   };
  // } else {
  //   return {
  //     ownProps,
  //   };
  // }
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

UserInputNumericContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInputNumericContainer);
