import React, { Component } from "react";
import "./App.css";
import Home from "./container/Home";
import Trending from "./container/Trending";
import routes from "./AppRoutes";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./Bar/TopBar/TopBar";
import Aboutus from "./components/Aboutus";
import Slider from "./Bar/SideBar/Slider";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Loghome from "./components/Loghome";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
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
            <Route path="/loghome" component={Loghome} />
            <Route path="/signup" component={Signup} />
            <Route path="/register" component={Register} />
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
