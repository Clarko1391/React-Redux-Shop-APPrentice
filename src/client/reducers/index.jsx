import { combineReducers } from "redux";
import Button from './Button';
import StyledButton from './StyledButton';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import UserInputString from './UserInputString';
import UserInputNumeric from './UserInputNumeric';
import UserInputDropdown from './UserInputDropdown';
import UserInputCheckBox from './UserInputCheckBox';
import ResultsOutput from './ResultsOutput';
import userReducer from "./userReducer";

const allReducer = combineReducers({
  // add individual state reducers here
  Button,
  StyledButton,
  LoginPage,
  RegistrationPage,
  UserInputString,
  UserInputNumeric,
  UserInputDropdown,
  UserInputCheckBox,
  ResultsOutput,
  userReducer,
});

export default allReducer;
