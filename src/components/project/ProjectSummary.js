import React, { Component } from "react";
import moment from "moment";

class ProjectSummary extends Component {
  //projects on the Dashboard

  handleDelete = id => {
    console.log("delete project", id);
    //new array - keeping the all items that fulfill the condition
    //  const todos = this.state.todos.filter(t => t.id !== id);
    /*   this.setState({
      todos
    }); */
  };
  render() {
    const { project } = this.props;
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <div className="card-parent">
            <div className="card-child">
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

                {moment(project.createAt.toDate()).calendar()}
              </p>
            </div>

            <div className="card-child delete-btn">
              <button
                className="btn pink lighten-1 z-depth-0"
                onClick={() => this.handleDelete(project.id)}
              >
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSummary;
