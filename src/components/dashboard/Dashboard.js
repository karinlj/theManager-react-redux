import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../project/ProjectList";
//connect to the store
import { connect } from "react-redux"; //the glue

class Dashboard extends Component {
  state = {};
  render() {
    console.log(this.props); //here I see my projects property from below
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

//map the state from the store to the props of this comp
const mapStateToStore = state => {
  return {
    //return an object
    //which properties are attached to the props of this comp
    //look in rootReducer and projectReducer
    projects: state.project.projects
  };
};
export default connect(mapStateToStore)(Dashboard);
