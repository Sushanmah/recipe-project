import React, {Component} from 'react';
import logo from './logo.png';
import loghome from '../../components/loghome'
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";


class  TopBar extends Component{
    render() {
        return(
        <div>
            <nav>
                <div className="logo">
                  <img src={logo}/>
                </div>
                
              </nav>
        </div>

        );
    }
}

export default TopBar;
