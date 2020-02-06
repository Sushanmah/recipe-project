import React, { Component } from "react";
import logo from "../Bar/TopBar/logo.png";

class Aboutus extends Component {
  render() {
    return (
      <div class="about-us">
        <h1>ABOUT US</h1>
        <div className="about-image">
          <img src={logo} alt="logo"></img>
        </div>
        <p>This is about page</p>
      </div>
    );
  }
}

export default Aboutus;
