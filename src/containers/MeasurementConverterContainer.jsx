import { connect } from "react-redux";
import MeasurementConverter from "../components/MeasurementConverter";
import React from "react";
//import * as actions from "../actions";

class MeasurementConverterContainer extends React.Component {
  render() {
    return <MeasurementConverter />;
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
)(MeasurementConverterContainer);
