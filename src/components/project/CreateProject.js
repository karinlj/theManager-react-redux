import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    // console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    //calling createProject from below
    this.props.createProject(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              id="content"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
//map dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    //return an object with properties that we want to add to props
    //createProject is a function and take in the projcet,
    //perform a dispatch,
    //call the action creator: createProject that we imported
    //that returns a function with a async call
    //then carry on with the dispatch on the action

    createProject: project => dispatch(createProject(project)) //project=this.state Hur fatta??
  };
};
export default connect(null, mapDispatchToProps)(CreateProject);
