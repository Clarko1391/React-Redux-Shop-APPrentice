import { connect } from "react-redux";
import UserSettings from "../components/UserSettings";
import React from "react";
import deepClone from "lodash.clonedeep";
import * as actions from "../actions/userActions";


class UserSettingsContainer extends React.Component {
  constructor (props) {
    super (props);

    this.internalProps = deepClone(props);
    this.userLogout = this.userLogout.bind(this);
  }
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.userName !== this.internalProps.userName) {
      this.internalProps.userName = nextProps.userName;
    }
    return true;
  }

  userLogout() {
    this.internalProps.userLogout();
  }

  render() {
    return <UserSettings userName={this.internalProps.userName} isLogged={this.internalProps.isLogged} userLogout={this.userLogout} />;
  }
}

const mapStateToProps = (state) => {
  let userName = "";
  let isLogged = false;
  if (
    state.userReducer.users &&
    state.userReducer.users.user1.isLogged
  ) {
    userName = state.userReducer.users.user1.userName;
    isLogged = state.userReducer.users.user1.isLogged;
  }
  return {
    userName: userName,
    isLogged: isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (props) => {
      dispatch(actions.clearUserSuccess(props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsContainer);
