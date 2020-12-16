import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import allReducer from "./client/reducers/index";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
    <App store={store} />,
  document.getElementById("root")
);
