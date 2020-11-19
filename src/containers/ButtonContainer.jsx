import { connect } from "react-redux";
import * as actions from "../actions/Button";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "../components/css/Button.css";
import React from "react";

const propTypes = {
  buttonId: PropTypes.string,
  buttonStyle: PropTypes.string,
  navigateTo: PropTypes.string,
  isNavButton: PropTypes.bool,
  buttonClicked: PropTypes.func,
  buttonTitlePrimary: PropTypes.string,
  buttonTitleSecondary: PropTypes.string,
};

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // rebind functions to 'this' within the constructor, these functions are for local use
    this.buttonClicked = props.buttonClicked.bind(this);
    this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  componentDidMount(){
    this.buttonInitialized(this.internalProps);
  }

  // write local functions here, these are specifically for callback functions and dispatching actions to the reducer

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <button buttonid={this.internalProps.buttonId} className={this.internalProps.buttonStyle} onClick={this.internalProps.buttonClicked}>
      {this.internalProps.buttonTitlePrimary}
      {this.internalProps.buttonTitleSecondary}
      {this.internalProps.isNavButton ? <Link className="buttonLink" to={this.internalProps.navigateTo}></Link> : ""}
    </button>
    );
  }
}

// mapStateToProps will pull existing state from the store and connect it to this container
const mapStateToProps = (state, ownProps) => {
  if (state.Button.buttons && state.Button.buttons[ownProps.buttonId]) {
    return {
      buttonId: ownProps.buttonId,
      ...state.Button.buttons[ownProps.buttonId] 
    };
  } else {
    return {
      ownProps
    };        
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClicked: (event) => {
      dispatch(actions.buttonClicked(event));
    },
    buttonInitialized: (props) => {
      dispatch(actions.buttonInitialized(props));
    },
  };
};


ButtonContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
