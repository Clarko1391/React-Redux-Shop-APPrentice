import { connect } from "react-redux";
import UserInputCheckBox from "../components/UserInputCheckBox";
import * as actions from "../actions/UserInputCheckBox";
import React from "react";

class UserInputCheckBoxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.internalProps = props;

    this.checkBoxInitialized = props.checkBoxInitialized.bind(this);
  }

  componentDidMount(){
    this.checkBoxInitialized(this.internalProps);
  }

  render() {
    return (
      <UserInputCheckBox
        inputId={this.internalProps.inputId}
        inputStyle={this.internalProps.inputStyle}
        checked={this.internalProps.checked}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.UserInputCheckBox.checkboxes && state.UserInputCheckBox.checkboxes[ownProps.inputId]) {
    return {
      buttonId: ownProps.inputId,
      ...state.UserInputCheckBox.checkboxes[ownProps.inputId] 
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
    checkBoxInitialized: (props) => {
      dispatch(actions.checkBoxInitialized(props))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInputCheckBoxContainer)