import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//redux:
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
//Provider comp surrounds our app and pass the store into the app,
//so that the app has access to the store
import { Provider } from "react-redux";
//thunk allows us to return a function in the dispatch (projectActions.js)
import thunk from "redux-thunk"; //middle ware
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

//pass the reducer into the store
const store = createStore(
  rootReducer,
  compose(
    //first store enchanser:
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    //second store enchanser:
    //passing in our config for our firebase
    reduxFirestore(fbConfig),
    //third store enchanser:
    reactReduxFirebase(fbConfig, { attachAuthIsReady: true })
  )
);
//wait with rendering the app until firebase is ready
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

//different reducers for different parts of our app to handle small actions
//combine them into a rootReducer

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
