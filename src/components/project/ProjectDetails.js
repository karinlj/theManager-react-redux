import React from "react";

const ProjectDetails = props => {
  //react router attaches some props automatically:
  //history, location, match
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title {id}
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem
            porta, condimentum dolor ut, consequat metus. Aliquam aliquet gravida iaculis.
            Pellentesque purus diam, aliquam in egestas a, blandit ac dolor.
          </p>
        </div>

        <div className="card-action grey-lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
