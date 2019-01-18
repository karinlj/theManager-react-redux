import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
//combining the reducers
import { combineReducers } from "redux";
//sync our firestore data with our state in the background
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  //all the stuff from projectReducer is stored on the state in an object called project
  project: projectReducer,
  firestore: firestoreReducer, //only from the projects collection though
  firebase: firebaseReducer //syncing firebase info incl authentication with our state
  //so we know if someone is logged in or not
});

export default rootReducer;
