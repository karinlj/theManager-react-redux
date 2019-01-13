import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
//connect to the redux state
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
  console.log("auth", auth);
  //if there is a uid, we are logged in and we show <SignedInLinks />
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          The Manager
        </Link>
        {/* if someone is logged in or not */}
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  //return an object with what we want to attach to the props
  //console.log(state);
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);

//1.connect to the redux state - access the firebase-property in rootReducer
//import { connect } and use it in the export
//2. map the state to our props - access auth status inside the props
//func mapStateToProps and pass it in to connect
