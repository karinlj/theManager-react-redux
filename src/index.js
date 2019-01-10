import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//redux:
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
//Provider comp surrounds our app and pass the store into the app,
//so that the app has access to the store
import { Provider } from "react-redux";
import thunk from "redux-thunk"; //middle ware

//pass the reducer into the store
const store = createStore(rootReducer, applyMiddleware(thunk));

//different reducers for different parts of our app to handle small actions
//combine them into a rootReducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
