import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import React from "react";
import * as actions from "../actions/LoginPage";

class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // this.userLoginAttempted = this.userLoginAttempted.bind(this);
  }

  // This function will be passed through Loginage to ButtonContainer and will carry the username and password props,
  // LoginAttempt (props) {
  //   this.userLoginAttempted(props);
  // }

  render() {
    return <LoginPage 
      // onClick={this.LoginAttempt}
    />;
  }
}
const mapStateToProps = (state) => {
  if (
    (state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.userName.userInput) &&
    (state.UserInputString.inputsSTR &&
    state.UserInputString.inputsSTR.password.userInput)
  ) {
    return {
      userName: state.UserInputString.inputsSTR.userName.userInput,
      password: state.UserInputString.inputsSTR.password.userInput,
    };
  } else {
    return {
      userName: "default Value",
      password: "default Value",
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAttempted: (props) => {
      dispatch(actions.userLoginAttempted(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
