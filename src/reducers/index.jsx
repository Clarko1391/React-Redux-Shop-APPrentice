import { combineReducers } from "redux";
import Button from './Button';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

const allReducer = combineReducers({
  // add individual state reducers here
  Button,
  LoginPage,
  RegistrationPage,
});

export default allReducer;
