import React, { Component } from "react";
import logo from "./logo.png";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

class TopBar extends Component {
  render() {
    return (
      <div>
        <nav class="mynav">
          <div class="logo">
            <img src={logo} />
          </div>
          <div>
            <h2>
              <Link to={"/home"}> Search Product</Link>
            </h2>
          </div>
          <div>
            <button className="btn waves-effect waves-light">
              <Link to={"/signin"}>Login</Link>
            </button>
            <button class="btn waves-effect waves-light">
              <Link to={"/signup"}>Register</Link>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;
