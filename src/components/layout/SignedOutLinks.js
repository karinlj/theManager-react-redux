import React from "react";
//import { NavLink } from "react-router-dom";

const SignedOutLinks = props => {
  return (
    <ul className="right">
      <li className="social">
        <a href="mailto:administrator@boozang.com" target="_top" className="mail">
          mail
        </a>
        <a href="https://www.facebook.com/boozangcloud/" target="_top" className="fb">
          facebook
        </a>
        <a
          href="https://www.linkedin.com/company/boozang"
          target="_top"
          className="linkedin"
        >
          linkedin
        </a>
        <a
          href="https://mobile.twitter.com/boozangcloud"
          target="_top"
          className="twitter"
        >
          twitter
        </a>
      </li>
      {/*   <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li> */}
    </ul>
  );
};

export default SignedOutLinks;
