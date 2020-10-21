import React from 'react';
import Login from './Login';
import Signup from './Signup';
import './css/Register.css';
const { Component } = require("react");

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            register:"login"
        }
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this)
    }
    login(){
        this.setState({
            register:"login"
        })
    }
    signup(){
        this.setState({
            register:"signup"
        })
    }
    render(){
        return(
            <div className="Register">
                
                {this.state.register=="login"?
                    <div className="Register-Card">
                        
                        <Login/>
                        
                    <div className="register-buttons">
                        
                        <button className="button state-button" onClick={this.signup}>Signup</button>
                        
                    </div>
                
                    </div>
                :
                    <div className="Register-Card">
                        
                        <Signup/>
                        
                <div className="register-buttons">
                    
                        <button className="button state-button" onClick={this.login}>Login</button>
                    
                    </div>
                
                    </div>
                }
                
                
            </div>
        )
    }
}

export default Register;