import React, { Component } from "react";
import logo from "./logo.png";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import loghome from "../../components/Loghome";

class TopBar extends Component {
  render() {
    return (
      <div>
        <nav class="mynav">
          <div class="logo">
            <img src={logo} />
          </div>

          {/* <div>
            <button className="btn waves-effect waves-light">
              <Link to={"/loghome"}>Login</Link>
            </button>
            <button class="btn waves-effect waves-light">
              <Link to={"/register"}>Register</Link>
            </button>
          </div> */}
        </nav>
      </div>
    );
  }
}

export default TopBar;
