import { connect } from "react-redux";
import RegistrationPage from "../components/RegistrationPage";
import React from "react";
import * as actions from "../actions/...";

class RegistrationPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: props.userName.bind(this),
      userEmail: props.userEmail.bind(this),
      userPassword: props.userPassword.bind(this),
      buttonClicked: props.butonClicked.bind(this),
    };
  }

  render() {
    return (
      <RegistrationPage  />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userName: state.RegistrationPage.userName,
    isLogged: state.RegistrationPage.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClicked: (event) => {
      dispatch(actions.buttonClicked(event));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPageContainer);
