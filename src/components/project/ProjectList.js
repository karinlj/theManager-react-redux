import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = props => {
  const { projects } = props;
  return (
    <div className="project-list section">
      {/* projects && means:  if we have projects... */}
      {projects &&
        projects.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary key={project.id} project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
