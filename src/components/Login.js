import React from 'react';
const { Component } = require("react");

class Login extends Component{
    render(){
        return(
            <div className="Login register-parent">
                <div className="heading register-element">
                    Login
                </div>
                <div className="email register-element">
                    <input className="input-field" placeholder="enter e-mail"></input>
                </div>
                <div className="password register-element">
                    <input className="input-field" placeholder="enter password"></input>
                </div>
                <div className="login register-element">
                    <button className="button" >Submit</button>
                </div>
            </div>
        )
    }
}

export default Login;