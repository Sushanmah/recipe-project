import React, {Component} from 'react';
import logo from './logo.png'


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
