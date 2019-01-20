import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
//import { createProject } from "../../store/actions/projectActions";
//import { Redirect } from "react-router-dom";

class EditProject extends Component {
  state = {
    title: "", //firebase.project.title
    content: "" //firebase.project.content
  };

  handleChange = e => {
    // console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSave = e => {
    e.preventDefault();
    // console.log("EditProject state", this.state);

    //calling createProject from below that dispatches an action
    //  this.props.createProject(this.state);

    //redirect the user to Dashboard
    //this.props.history.push("/");
  };
  render() {
    const { auth, project, projectContent, projectTitle } = this.props;
    // console.log("project", project);
    console.log("projectTitle", projectTitle);
    console.log("projectContent", projectContent);

    //if auth has NOT a uid we return a redirect to the login page
    //if (!auth.uid) return <Redirect to="/signin" />;

    //if auth has a uid we are logged in and render the Create Project jsx
    return (
      <div className="container create-project">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Edit Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <br />
            <textarea
              className="materialize-textarea"
              id="title"
              onChange={this.handleChange}
              value={projectTitle}
            />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <br />
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
              value={projectContent}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" onClick={this.handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
//ownProps is the props of the comp before we attach anything to it
//react router attaches some props automatically: history, location, match
const mapStateToProps = (state, ownProps) => {
  console.log("EditProject render-state", state);

  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  //if we have projects, find the project of the projects obj with that id
  //otherwise return null
  const project = projects ? projects[id] : null;
  const projectContent = projects ? projects[id].content : null;
  const projectTitle = projects ? projects[id].title : null;
  return {
    //these object are what we attach to our prop
    //here we want the single project from the projects colletion
    project: project,
    auth: state.firebase.auth,
    projectContent: projectContent,
    projectTitle: projectTitle
  };
};

//map dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    //return an object with properties that we want to add to props
    //createProject is a function that takes in the projcet,
    //perform a dispatch,
    //call the action creator: createProject that we imported
    //that returns a function with a async call
    //then carry on with the dispatch on the action
    //
    // createProject: project => dispatch(createProject(project)) //project=this.state
  };
};
export default compose(
  //composing 2 higher order comp
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(EditProject);

//export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
