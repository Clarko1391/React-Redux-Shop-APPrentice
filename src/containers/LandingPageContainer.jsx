import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import React from "react";

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    isLogged: state.isLogged,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buttonClicked: (event) => {
//       dispatch(actions.buttonClicked(event));
//     },
//   };
// };

class LandingPageContainer extends React.Component {
  render() {
    return <LandingPage userName={this.userName} isLogged={this.isLogged} />;
  }
}

export default connect(mapStateToProps, {
  /*mapDispatchToProps*/
})(LandingPageContainer);
