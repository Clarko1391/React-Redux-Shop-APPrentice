import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import React from "react";
import deepClone from "lodash.clonedeep";


class LandingPageContainer extends React.Component {

  constructor (props) {
    super(props);

    this.internalProps = deepClone(props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userName !== this.internalProps.userName) {
      this.internalProps.userName = nextProps.userName;
    }
    if (nextProps.isLogged !== this.internalProps.isLogged) {
      this.internalProps.isLogged = nextProps.isLogged;
    }
    return true;
  }

  render() {
    return <LandingPage userName={this.internalProps.userName} isLogged={this.internalProps.isLogged} />;
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buttonClicked: (event) => {
//       dispatch(actions.buttonClicked(event));
//     },
//   };
// };

export default connect(mapStateToProps,
  /*mapDispatchToProps*/
)(LandingPageContainer);
