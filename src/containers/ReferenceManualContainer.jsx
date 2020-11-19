import { connect } from "react-redux";
import ReferenceManual from "../components/ReferenceManual";
import React from "react";
//import * as actions from "../actions";

class ReferenceManualContainer extends React.Component {
  render() {
    return <ReferenceManual />;
  }
}

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

export default connect(
  mapStateToProps
  /*mapDispatchToProps,*/
)(ReferenceManualContainer);