import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Home from "../slideshow/Home";


class Landing extends Component {
  render() {
    return (
      
      <div style={{ height: "100vh" }} className="container valign-wrapper" >
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome to codeRunners Forum connect with fellow bootcampers</b>{" "}
              <span style={{ fontFamily: "monospace" }}></span> 
            </h4>
            <p className="flow-text grey-text text-darken-1">
             Register To Begin!!!
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
export default Landing;