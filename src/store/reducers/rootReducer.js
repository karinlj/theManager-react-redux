import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
//combining the reducers
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
