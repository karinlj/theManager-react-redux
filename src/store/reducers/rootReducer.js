import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
//combining the reducers
import { combineReducers } from "redux";
//sync our firestore data with our state in the background
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer //only from the projects collection though
});

export default rootReducer;
