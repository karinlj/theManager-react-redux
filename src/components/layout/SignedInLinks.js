import React from "react";
import { NavLink } from "react-router-dom";
//import action creator and connect to import { connect } from 'react-redux'
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <button className="signout" onClick={props.signOut}>
          Log Out
        </button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighting-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};
//map dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    //returns a signout function
    //that dispatches the action creator: signOut
    signOut: () => dispatch(signOut())
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
