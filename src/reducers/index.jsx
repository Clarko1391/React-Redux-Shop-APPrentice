import { combineReducers } from "redux";
import Button from './Button';
import LoginPage from './LoginPage';

const allReducer = combineReducers({
  // add individual state reducers here
  Button,
  LoginPage,
});

export default allReducer;
