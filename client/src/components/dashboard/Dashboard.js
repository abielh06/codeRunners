import React, { Component } from "react";
import Home from "../slideshow/Home"

class Dashboard extends Component {

  render() {

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <Home />
      </div>
    );
  }
}

export default (Dashboard)