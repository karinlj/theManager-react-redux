import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProjectItem = props => {
  //projects on the Dashboard

  const { project, onDelete, auth } = props; //from ProjectList
  console.log("props", props);

  const deleteBtn =
    auth.uid === project.authorId
      ? <button
          className="btn pink lighten-1 z-depth-0"
          onClick={() => onDelete(project.id)}
        >
          {" "}Delete
        </button>
      : null;

  return (
    <div className="card z-depth-0 project-item">
      <div className="card-content grey-text text-darken-3">
        <div className="card-parent">
          <div className="card-child">
            <Link
              to={"/project/" + project.id}
              key={project.id}
              className="project-title-link"
            >
              <span className="card-title">
                {project.title}
              </span>
            </Link>

            <p>
              Posted by: {project.authorFirstName} {project.authorLastName}
            </p>
          </div>

          {/* delete button */}
          <div className="card-child delete-btn" />
          {deleteBtn}
        </div>

        <p className="grey-text">
          {/*{project.createAt.toDate().toString()}
          too long...use package Moment.js instead   
           */}

          {moment(project.createAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  //return an object with what we want to attach to the props
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(ProjectItem);
