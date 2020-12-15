import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import deepClone from "lodash.clonedeep";

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
    
        this.internalProps = deepClone(props);
      }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isLogged !== this.internalProps.isLogged) {
      this.internalProps.isLogged = nextProps.isLogged;
    }
    return true;
  }

  render() {
    return <Navbar isLogged={this.internalProps.isLogged} />;
  }
}

const mapStateToProps = (state) => {
  let isLogged = false;
  if (state.LoginPage.users && state.LoginPage.users.user1.isLogged) {
    isLogged = state.LoginPage.users.user1.isLogged;
  }
  return {
    isLogged: isLogged,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
