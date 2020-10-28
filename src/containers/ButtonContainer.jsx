import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from '../actions/Button';

const mapStateToProps = (state) => {
  return {
    buttonStyle: state.Button.buttonStyle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClicked: (event) => {
      dispatch(actions.buttonClicked(event));
    },
    buttonInitialized: (props) => {
        dispatch(actions.buttonInitialized(props))
    },
  };
};

const ButtonContainer = connect(
    mapStateToProps, 
    mapDispatchToProps,
)(Button);

export default ButtonContainer;
