import React, { Component } from "react";
//get access to the signIn action creator
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
//import Boozang from "../../img/boozang.png";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    // console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    //this.state is the credentials: email & password
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    //if auth HAS a uid we return a redirect to the Dashboard
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container signin">
        {/*  <div className="right">
          Powered by &nbsp;{" "}
          <a href="https:boozang.com">
            <img src={Boozang} alt="boozang logo" />
            <br />
            <h3 className="text-white">Try it out now!</h3>
          </a>
        </div> */}
        <div className="row">
          <div className="col s12 m6">
            <div className="card z-depth-0 project-summary">
              <div className="card-content grey-text text-darken-3">
                <h1 className="intro-title">Welcome to theManager!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  volutpat, neque nec consequat porta.
                </p>
                <br />
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  volutpat, neque nec consequat porta, magna risus consectetur ex, sed
                  pulvinar neque nibh a neque. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Phasellus volutpat, neque nec consequat porta, magna
                  risus consectetur ex, sed pulvinar neque nibh a neque.
                </p>
                <br />
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                  volutpat, neque nec consequat porta, magna risus consectetur ex, sed
                  pulvinar neque nibh a neque.
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m5  offset-m1">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>

              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Login</button>
                <div className="red-text center">
                  {/*  if authError contains a string  */}
                  {authError
                    ? <p>
                        {" "}{authError}
                      </p>
                    : null}
                </div>
              </div>
              <p>
                Not signed up yet? &nbsp;<NavLink to="/signup">Sign Up</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //from rootReducer: property: auth
    //from authReducer: property: authError
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //return a function
    //dispatch an action creator
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
//first parameter always mapStateToProps
//if we do not have that: null
