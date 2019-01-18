import React, { Component } from "react";
import { connect } from "react-redux"; //the glue
//which collection we want to connect to here
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { deleteProject } from "../../store/actions/projectActions";

class ProjectDetails extends Component {
  handleDelete = id => {
    console.log("delete project", id);
    //new array - keeping the all items that fulfill the condition
    //  const todos = this.state.todos.filter(t => t.id !== id);
    /*   this.setState({
      todos
    }); */
    this.props.deleteProject(id);

    //redirect the user to Dashboard
    // this.props.history.push("/");
  };

  render() {
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
              <div className="card-parent">
                <div className="card-child">
                  <span className="card-title">
                    {project.title}
                    {/*  Project Title {id} */}
                  </span>
                  <p>
                    {project.content}
                    {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem.
          Pellentesque purus diam, aliquam in egestas a, blandit ac dolor. */}
                  </p>
                </div>

                <div className="card-child delete-btn">
                  <button
                    className="btn pink lighten-1 z-depth-0"
                    /* project: se mapStateToProps */
                    onClick={() => this.handleDelete(project)}
                  >
                    Delete
                  </button>
                </div>
              </div>

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
  }
}

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

//map dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    //return an object with properties that we want to add to props
    //deleteProject is a function that takes in the projcet,
    //perform a dispatch,
    //call the action creator: deleteProject that we imported
    //that returns a function with a async call
    //then carry on with the dispatch on the action

    deleteProject: id => dispatch(deleteProject(id)) //project=this.state
  };
};
export default compose(
  //composing 2 higher order comp
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
