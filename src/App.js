import React, { Component } from "react";
import "./App.scss";
import Home from "./components/Home";
import Trending from "./components/Trending";
import routes from "./AppRoutes";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import TopBar from "./Bar/TopBar/TopBar";
import Aboutus from "./components/Aboutus";
import Slider from "./Bar/SideBar/Slider";
import Landing from "./components/Landing";
import loghome from "./components/loghome"
import AddRecipe from "./components/AddRecipe";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
        <TopBar />
        <Slider />
            <Landing/>
            <Switch>
              
            <Route path="/loginhome" component={loghome}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

