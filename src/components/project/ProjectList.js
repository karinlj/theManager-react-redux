import React from "react";
import ProjectItem from "./ProjectItem";
//import { Link } from "react-router-dom";

const ProjectList = props => {
  const { projects, onDelete } = props; //from Dashboard
  return (
    <div className="project-list section">
      {/* projects && means:  if we have projects... */}
      {projects &&
        projects.map(project => {
          return (
            /*         <Link to={"/project/" + project.id} key={project.id}> */
            <ProjectItem key={project.id} project={project} onDelete={onDelete} />
            /*    </Link> */
          );
        })}
    </div>
  );
};

export default ProjectList;
