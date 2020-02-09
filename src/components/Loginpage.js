import React, { Component } from 'react'
import fire from '../config/fire'

class Loginpage extends Component{

    logout (){
        
        fire.auth().signOut();
    }
    render(){
        return(

            <div>
                You are logged in
             <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}

export default Loginpage;