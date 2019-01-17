import React from "react";
import Boozang from "../../img/boozang.png";

const Footer = () => {
  //UI component
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <ul className="container-section">
              <li>
                <ul>
                  <li>
                    <h3 className="themanager">theManager</h3> powered by &nbsp;{" "}
                    <a href="https://boozang.com">
                      <img src={Boozang} alt="boozang logo" />
                    </a>
                  </li>
                  <li className="udemy">
                    <h5>
                      <a href="https://www.udemy.com/code-less-test-automation-with-boozang/">
                        Free Boozang Udemy course
                      </a>
                    </h5>
                  </li>
                </ul>
              </li>
              {/* lower section */}

              <ul className="lower-section">
                <li className="social">
                  <a
                    href="mailto:administrator@boozang.com"
                    target="_top"
                    className="mail"
                  >
                    mail
                  </a>
                  <a
                    href="https://www.facebook.com/boozangcloud/"
                    target="_top"
                    className="fb"
                  >
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
                <li className="copy">&copy; 2018 Boozang</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
