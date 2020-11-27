import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import React from "react";
import * as actions from "../actions/LoginPage";
import deepClone from "lodash.clonedeep";

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = deepClone(props);

    this.userLoginAttempt = this.userLoginAttempt.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userName !== this.internalProps.userName) {
      console.log("username has changed!");
      this.internalProps.userName = nextProps.userName;
    }
    if (nextProps.password !== this.internalProps.password) {
      console.log("password has changed!");
      this.internalProps.password = nextProps.password;
    }
    return true;
  }

  userLoginAttempt() {
    // Need to check user entry data in userName and password against existing database to see if that user exists or needs to register
    let username = this.internalProps.userName;
    let password = this.internalProps.password;

    let userObject = {
      username: username,
      password: password,
      isLogged: true,
    }

    this.userLoginAttempt(userObject);    
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
      dispatch(actions.userLoginAttempted(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
