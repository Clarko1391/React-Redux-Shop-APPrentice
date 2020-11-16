import { connect } from "react-redux";
import UserSettings from "../components/UserSettings";
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

class UserSettingsContainer extends React.Component {
  render() {
    return <UserSettings userName={this.userName} />;
  }
}

export default connect(mapStateToProps, {
  /*mapDispatchToProps*/
})(UserSettingsContainer);
