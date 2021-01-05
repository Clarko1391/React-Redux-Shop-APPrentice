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
    if (nextProps.email !== this.internalProps.email) {
      this.internalProps.email = nextProps.email;
    }
    return true;
  }

  userLoginAttempt() {
    let username = this.internalProps.userName;
    let email = this.internalProps.email;
    let password = this.internalProps.password;

    let userObject = {
      name: username,
      email: email,
      password: password,
    }

    // Validate which login method to use
    if(username && email) {
      alert(`please enter ONLY your user name OR your email, not both`);
    } else if (username && !email) {
      this.internalProps.userLoginByName(userObject);
    } else if (!username && email) {
      this.internalProps.userLoginByEmail(userObject);
    };
  }

  render() {
    return <LoginPage userLoginAttempt={this.userLoginAttempt} />;
  }
}

const mapStateToProps = (state) => {
  let userName;
  let password;
  let email;
  if (
    state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.loginUserName &&
    state.UserInputString.inputsSTR.loginUserName.userInput
  ) {
    userName = state.UserInputString.inputsSTR.loginUserName.userInput;
  }
  if (
    state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.loginPassword &&
    state.UserInputString.inputsSTR.loginPassword.userInput
  ) {
    password = state.UserInputString.inputsSTR.loginPassword.userInput;
  }
  if (
    state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.loginEmail &&
    state.UserInputString.inputsSTR.loginEmail.userInput
  ) {
    email = state.UserInputString.inputsSTR.loginEmail.userInput;
  }
  return {
    userName: userName,
    email: email,
    password: password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginByName: (props) => {
      dispatch(actions.getUserbyName(props));
    },
    userLoginByEmail: (props) => {
      dispatch(actions.getUserbyEmail(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
