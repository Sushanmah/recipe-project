import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import Loginpage from "./Loginpage";
import { BrowserRouter, Link, Route } from "react-router-dom";
import fire from "../config/fire";

class loghome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <Loginpage /> : <Login />}</div>;
  }
}
export default loghome;
