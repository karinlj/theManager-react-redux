import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = props => {
  const { projects, onDelete, onEdit } = props; //from Dashboard
  return (
    <div className="project-list section">
      {/* projects && means:  if we have projects... */}
      {projects &&
        projects.map(project => {
          return (
            <ProjectItem
              key={project.id}
              project={project}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
    </div>
  );
};

export default ProjectList;
