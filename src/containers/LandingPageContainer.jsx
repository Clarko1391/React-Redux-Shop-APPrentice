import { connect } from "react-redux";
import LandingPage from "../components/LandingPage";
import React from "react";

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: props.isLogged.bind(this),
      userName: props.userName.bind(this),
    };
  }

  render() {
    return (
      <LandingPage
        userName={this.userName}
        isLogged={this.isLogged}
      />
    );
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


export default connect(mapStateToProps, {/*mapDispatchToProps*/})(LandingPageContainer);