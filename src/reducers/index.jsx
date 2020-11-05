import { combineReducers } from "redux";
import Button from './Button';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import UserInputString from './UserInputString';
import UserInputNumeric from './UserInputNumeric';

const allReducer = combineReducers({
  // add individual state reducers here
  Button,
  LoginPage,
  RegistrationPage,
  UserInputString,
  UserInputNumeric,
});

export default allReducer;
