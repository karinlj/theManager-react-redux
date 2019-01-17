import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
//connect to the store
import { connect } from "react-redux"; //the glue
//which collection we want to connect to here
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  state = {};
  render() {
    //console.log(this.props); //here I see my projects property from below

    const { projects, auth, notifications } = this.props;
    //if auth has NOT a uid we return a redirect to the login page
    if (!auth.uid) return <Redirect to="/signin" />;

    //if auth has a uid we are logged in and render the Dashboard
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1 notifications">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

//map the state from the store to the props of this comp
const mapStateToProps = state => {
  // console.log("state", state);
  return {
    //return an object
    //which properties are attached to the props of this comp
    //look in rootReducer and projectReducer
    // projects: state.project.projects  //from dummy data
    projects: state.firestore.ordered.projects, //from firestore
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};
//composing two higher order components
export default compose(
  connect(mapStateToProps),
  //passing in which collection we want to connect to
  firestoreConnect([
    //my collections
    { collection: "projects", orderBy: ["createAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
