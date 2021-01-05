import { connect } from "react-redux";
import RegistrationPage from "../components/RegistrationPage";
import React from "react";
import * as actions from "../actions/userActions";
import deepClone from "lodash.clonedeep";

class RegistrationPageContainer extends React.Component {
  constructor(props) {
    super(props);

    
    this.internalProps = deepClone(props);
    this.internalProps.userEmail = "";

    this.userRegistrationCompleted = this.userRegistrationCompleted.bind(this);
    // this.state = {
    //   userRegistrationCompleted: props.userRegistrationCompleted.bind(this),
    // };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userName !== this.internalProps.userName) {
      this.internalProps.userName = nextProps.userName;
    }
    if (nextProps.userEmail !== this.internalProps.userEmail) {
      this.internalProps.userEmail = nextProps.userEmail;
    }
    if (nextProps.password !== this.internalProps.password) {
      this.internalProps.password = nextProps.password;
    }
    return true;
  }

  userRegistrationCompleted() {
    // Need to check user entry data in userName and password against existing database to see if that user exists or needs to register
    let username = this.internalProps.userName;
    let userEmail = this.internalProps.userEmail;
    let password = this.internalProps.password;

    let userObject = {
      name: username,
      email: userEmail,
      password: password,
      active: true,
    };

    if (username && userEmail && password) {
    this.internalProps.userRegistrationCompleted(userObject);
    } else {
      alert(`Please ensure all fields are correctly filled out and that your password is entered the same in both fields`);
    };
  }

  render() {
    return (
      <RegistrationPage  userRegistrationCompleted={this.userRegistrationCompleted}/>
    );
  }
}
const mapStateToProps = (state) => {
  let userName = "";
  let userEmail = "";
  let password = "";
  if (
    state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.regisNameInput &&
    state.UserInputString.inputsSTR.regisNameInput.userInput
  ) {
    userName = state.UserInputString.inputsSTR.regisNameInput.userInput;
  }
  if (
    state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.regisEmailInput &&
    state.UserInputString.inputsSTR.regisEmailInput.userInput
  ) {
    userEmail = state.UserInputString.inputsSTR.regisEmailInput.userInput;
  }
  if (
    (state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.regisPasswordInput1 &&
    state.UserInputString.inputsSTR.regisPasswordInput1.userInput) &&
    (state.UserInputString &&
    state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.regisPasswordInput2 &&
    state.UserInputString.inputsSTR.regisPasswordInput2.userInput)
  ) {
    if ((state.UserInputString.inputsSTR.regisPasswordInput1.userInput) === (state.UserInputString.inputsSTR.regisPasswordInput2.userInput)) {
    password = state.UserInputString.inputsSTR.regisPasswordInput1.userInput;
    }
  }
  return {
    userName: userName,
    userEmail: userEmail,
    password: password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegistrationCompleted: (user) => {
      dispatch(actions.createUser(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPageContainer);
