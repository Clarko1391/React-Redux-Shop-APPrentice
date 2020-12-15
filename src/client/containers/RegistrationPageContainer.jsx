import { connect } from "react-redux";
import RegistrationPage from "../components/RegistrationPage";
import React from "react";
import * as actions from "../actions/RegistrationPage";

class RegistrationPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userRegistrationCompleted: props.userRegistrationCompleted.bind(this),
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
    userName: state.userName,
    password: state.password,
    isLogged: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegistrationCompleted: (event) => {
      dispatch(actions.userRegistrationCompleted(event));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPageContainer);
