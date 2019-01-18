import React from "react";
import { connect } from "react-redux"; //the glue
//which collection we want to connect to here
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  //react router attaches some props automatically:
  //history, location, match
  //const id = props.match.params.id;

  const { project, auth } = this.props; //from mapStateToProps + history, location, match
  console.log("projectDetails-props", this.props);

  //if auth has NOT a uid we return a redirect to the login page
  if (!auth.uid) return <Redirect to="/signin" />;

  //if we have a project, return some jsx
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {project.title}
              {/*  Project Title {id} */}
            </span>
            <p>
              {project.content}
            </p>

            <div className="card-action grey-lighten-4 grey-text">
              {/* <div>Posted by the Net Ninja</div> */}
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>
                {" "}{moment(project.createAt.toDate()).calendar()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      //if project does not exist yet
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

//ownProps is the props of the comp before we attach anything to it
//react router attaches some props automatically: history, location, match
const mapStateToProps = (state, ownProps) => {
  //console.log("state", state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  //if we have projects, find the project of the projects obj with that id
  //otherwise return null
  const project = projects ? projects[id] : null;
  return {
    //these object are what we attach to our prop
    //here we want the single project from the projects colletion
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  //composing 2 higher order comp
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
