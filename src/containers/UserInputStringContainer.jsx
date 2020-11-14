import { connect } from "react-redux";
import UserInputString from "../components/UserInputString";
import * as actions from "../actions/UserInputString";
import React from "react";

class UserInputStringContainer extends React.Component {
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
      <UserInputString
        placeHolder={this.internalProps.placeHolder}
        value={this.internalProps.value}
        inputStyle={this.internalProps.inputStyle}
        inputId={this.internalProps.inputId}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputString.inputsSTR && state.UserInputString.inputsSTR[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputString.inputsSTR[ownProps.inputId] 
    };
  } else {
    return {
      ownProps
    };        
  }
};

// const mapStateToProps = (state) => {
//   return {
//     placeHolder: state.placeHolder,
//     value: state.value,
//     inputStyle: state.inputStyle,
//     inputId: state.inputId,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(actions.onChange(event))    
    },
    inputInitialized: (props) => {
      dispatch(actions.inputInitialized(props))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputStringContainer);