import { connect } from "react-redux";
import UserInputNumeric from "../components/UserInputNumeric";
import * as actions from "../actions/UserInputNumeric";
import React from "react";

class UserInputNumericContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    this.inputInitialized = props.inputInitialized.bind(this);
  }

  componentDidMount(){
    this.inputInitialized(this.internalProps);
  }

  render() {
    return (
      <UserInputNumeric
        placeHolder={this.internalProps.placeHolder}
        inputStyle={this.internalProps.inputStyle}
        inputId={this.internalProps.inputId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputNumeric.inputsNUM && state.UserInputNumeric.inputsNUM[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputNumeric.inputsNUM[ownProps.inputId] 
    };
  } else {
    return {
      ownProps
    };        
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(actions.onChange(event));
    },
    inputInitialized: (props) => {
      dispatch(actions.inputInitialized(props));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInputNumericContainer);