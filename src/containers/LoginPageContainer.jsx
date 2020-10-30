import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import React from "react";
import * as actions from "../actions/";

class LoginPageContainer extends React.Component {
  
    constructor() {
        
  };

  render() {
    return <LoginPage />;
  }
}
const mapStateToProps = (state) => {
  return {
    userName: state.LandingPage.userName,
    password: state.LandingPage.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginAttempted: (props) => {
      dispatch(actions.userLoginAttempted(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
