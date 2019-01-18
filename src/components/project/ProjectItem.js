import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const ProjectItem = props => {
  //projects on the Dashboard

  const { project, onDelete } = props; //from ProjectList
  console.log("props", props);
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
          <div className="card-child delete-btn">
            <button
              className="btn pink lighten-1 z-depth-0"
              /*    passing in the project.id */
              onClick={() => onDelete(project.id)}
            >
              Delete
            </button>
          </div>
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

export default ProjectItem;
