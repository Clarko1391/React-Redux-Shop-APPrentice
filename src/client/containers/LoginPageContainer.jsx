import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import React from "react";
import * as actions from "../actions/userActions";
import deepClone from "lodash.clonedeep";

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = deepClone(props);

    this.userLoginAttempt = this.userLoginAttempt.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userName !== this.internalProps.userName) {
      this.internalProps.userName = nextProps.userName;
    }
    if (nextProps.password !== this.internalProps.password) {
      this.internalProps.password = nextProps.password;
    }
    return true;
  }

  userLoginAttempt() {
    let username = this.internalProps.userName;
    
    // let password = this.internalProps.password;

    let userObject = {
      name: username,
      email: username,
      // password: password,
    }   
    this.internalProps.userLoginAttempt(userObject);
  }

  render() {
    return <LoginPage userLoginAttempt={this.userLoginAttempt} />;
  }
}

const mapStateToProps = (state) => {
  let userName = "";
  let password = "";
  if (
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.loginUserName.userInput
  ) {
    userName = state.UserInputString.inputsSTR.loginUserName.userInput;
  }
  if (
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.loginPassword.userInput
  ) {
    password = state.UserInputString.inputsSTR.loginPassword.userInput;
  }
  return {
    userName: userName,
    password: password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAttempt: (props) => {
      dispatch(actions.getUserbyEmail(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
