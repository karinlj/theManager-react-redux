import React from "react";

const ProjectSummary = props => {
  //projects on the Dashboard
  const { project } = props;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">
          {project.title}
        </span>
        <p>
          Posted by: {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {/*{project.createAt.toDate().toString()}
          too long...use package Moment.js instead   
           */}

          {project.createAt.toDate().toString()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
