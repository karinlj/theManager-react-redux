import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
//connect to the store
import { connect } from "react-redux"; //the glue
//which collection we want to connect to here
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { deleteProject } from "../../store/actions/projectActions";

class Dashboard extends Component {
  state = {};

  handleDelete = projectId => {
    //taking as parameter the project.id
    console.log("delete project", projectId);
    //new array - keeping the all items that fulfill the condition
    //  const todos = this.state.todos.filter(t => t.id !== id);
    /*   this.setState({
      todos
    }); */
    this.props.deleteProject(projectId);

    //redirect the user to Dashboard
    // this.props.history.push("/");
  };
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
            <ProjectList projects={projects} onDelete={this.handleDelete} />
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

//map dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    //return an object with properties that we want to add to props
    //deleteProject is a function that takes in the projcet,
    //perform a dispatch,
    //call the action creator: deleteProject that we imported
    //that returns a function with a async call
    //then carry on with the dispatch on the action

    deleteProject: id => dispatch(deleteProject(id)) //id = projectId
  };
};

//composing two higher order components
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  //passing in which collection we want to connect to
  firestoreConnect([
    //my collections
    { collection: "projects", orderBy: ["createAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
