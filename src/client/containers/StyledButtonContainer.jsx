import { connect } from "react-redux";
import * as actions from "../actions/StyledButton";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

// CSS
const StyledButton = styled.button`
  position: relative;
  width: 100%;
  height: 15vh;
  max-height: 120px;
  color: #fcfbfc;
  background-color: rgba(78, 77, 78, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 4px;
  text-decoration: none;
  border: 0px;

  &&:hover {
    background-color: rgba(218, 22, 34, 0.5);
  }
`;

const Header = styled.h2`
  margin: 0px;
  padding: 0px;
  font-size: 2vh;
  color: #fcfbfc;
`;

const SubText = styled.h3`
  margin: 0px;
  padding: 0px;
  font-size: 1.5vh;
  color: #fcfbfc;
`;

const ButtonLink = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: transparent;
`;

const propTypes = {
  buttonId: PropTypes.string,
  navigateTo: PropTypes.string,
  isNavButton: PropTypes.bool,
  buttonClicked: PropTypes.func,
  buttonTitlePrimary: PropTypes.string,
  buttonTitleSecondary: PropTypes.string,
};

class StyledButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    // rebind functions to 'this' within the constructor, these functions are for local use
    this.buttonInitialized = props.buttonInitialized.bind(this);
  }

  componentDidMount() {
    this.buttonInitialized(this.internalProps);
  }

  // write local functions here, these are specifically for callback functions and dispatching actions to the reducer

  // This render is used to pass props only, no JSX should be coded here
  render() {
    return (
      <StyledButton
        buttonid={this.internalProps.buttonId}
      >
        <Header>{this.internalProps.buttonTitlePrimary}</Header>
        <SubText>{this.internalProps.buttonTitleSecondary}</SubText>
        {this.internalProps.isNavButton ? (
          <ButtonLink
            className="buttonLink"
            to={this.internalProps.navigateTo}
          ></ButtonLink>
        ) : (
          ""
        )}
      </StyledButton>
    );
  }
}

// mapStateToProps will pull existing state from the store and connect it to this container
const mapStateToProps = (state, ownProps) => {
  if (state.Button.buttons && state.Button.buttons[ownProps.buttonId]) {
    return {
      buttonId: ownProps.buttonId,
      ...state.Button.buttons[ownProps.buttonId],
    };
  } else {
    return {
      ownProps,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonInitialized: (props) => {
      dispatch(actions.buttonInitialized(props));
    },
  };
};

StyledButtonContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(StyledButtonContainer);
