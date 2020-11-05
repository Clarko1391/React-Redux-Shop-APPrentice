import { combineReducers } from "redux";
import Button from './Button';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import UserInputString from './UserInputString';
import UserInputNumeric from './UserInputNumeric';
import UserInputDropdown from './UserInputDropdown';
import UserInputCheckBox from './UserInputCheckBox';

const allReducer = combineReducers({
  // add individual state reducers here
  Button,
  LoginPage,
  RegistrationPage,
  UserInputString,
  UserInputNumeric,
  UserInputDropdown,
  UserInputCheckBox,
});

export default allReducer;
