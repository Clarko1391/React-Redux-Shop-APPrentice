import { connect } from "react-redux";
import FractionalCalculator from "../components/FractionalCalculator";
import React from "react";
//import * as actions from "../actions";

class FractionalCalculatorContainer extends React.Component {
  render() {
    return <FractionalCalculator />;
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
)(FractionalCalculatorContainer);