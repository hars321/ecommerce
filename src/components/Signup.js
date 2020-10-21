import React from 'react';
const { Component } = require("react");

class Signup extends Component{
    render(){
        return(
            <div className="Signup register-parent ">
                <div className="heading register-element">
                    Signup
                </div>
                <div className="username register-element">
                    <input className="input-field" placeholder="enter username"></input>
                </div>
                <div className="email register-element">
                    <input className="input-field" placeholder="enter e-mail"></input>
                </div>
                <div className="password register-element">
                    <input className="input-field" placeholder="enter password"></input>
                </div>
                <div className=" register-element">
                    <button className="button" >Submit</button>
                </div>
            </div>
        )
    }
}

export default Signup;