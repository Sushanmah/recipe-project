import React, { Component } from "react";
import "../App.scss";
import Home from "./Home";
import Trending from "./Trending";
import routes from "../AppRoutes";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import TopBar from "../Bar/TopBar/TopBar";
import Aboutus from "./Aboutus";
import Slider from "../Bar/SideBar/Slider";
import loghome from "./loghome";
import AddRecipe from "./AddRecipe";

class Landing extends Component {
    // state={
    //     navItems:[
    //         {id:1, label: 'Home', path:''},
    //         {id:2, label: 'AddRecipe', path:''},
    //         {id:3, label: 'Search', path:''}
    //     ]
    // }
    render() {
        return (

            <div>
                <Slider />
                <BrowserRouter>
                    <h2>
                        <Link to={"/home"}> Search Product</Link>
                    </h2>
                    <h2>
                        <Link to={"/loginhome"}> login</Link>
                    </h2>

                    {/*{routes.map((route,key)=>(*/}
                    {/*    <Route path={route.path} component={route.component} exact={route.exact}/>*/}
                    {/*))}*/}
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/loginhome" component={loghome} />
                    <Trending />
                </BrowserRouter>
            </div>
        );
    }
}
export default Landing;
