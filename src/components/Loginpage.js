import React, { Component } from "react";
import fire from "../config/fire";
import logo from "../Bar/TopBar/logo.png";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./Detail";
import Home from "../container/Home";

class Loginpage extends Component {
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <nav class="mynav">
          <div class="logo">
            <img src={logo} />
          </div>
        </nav>
        <button
          class="btn waves-effect waves-light right"
          onClick={this.logout}
        >
          logout
        </button>
        <div class="mycontainer">
          <div class="links">
            <div>
              <button class="btn waves-effect waves-light">
                <Link to="/create">AddProducts</Link>
              </button>
            </div>
          </div>
          <div class="main-content">
            <Home />
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
