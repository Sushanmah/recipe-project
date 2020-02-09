import React, { Component } from "react";
import "./App.css";
import Home from "./container/Home";
import Trending from "./container/Trending";
import routes from "./AppRoutes";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import TopBar from "./Bar/TopBar/TopBar";
import Aboutus from "./components/Aboutus";
import Slider from "./Bar/SideBar/Slider";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <TopBar />

          {/* <h2>
            <Link to={"/home"}> Search Product</Link>
          </h2>
          <h2>
            <Link to={"/trending"}> Trending</Link>
          </h2> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Trending} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>

          {/* <Trending /> */}
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
{
  /*<Switch>*/
}
{
  /*    {routes.map((route,key)=>*/
}
{
  /*        <Route path={route.path} component={route.component} exact={route.exact}/>*/
}
{
  /*    )}*/
}
{
  /*</Switch>*/
}
