import React from 'react';
import {Router, Route,Redirect, Link, RouteHandler} from 'react-router';
const { Component } = require("react");

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            loggedin:false
        }
        this.submit=this.submit.bind(this);
        this.email=React.createRef();
        this.password=React.createRef();

    }
    componentDidMount(){
        if(sessionStorage.hasOwnProperty('user_id')){
            this.setState({
                loggedin:true
            })
        }
    }

    login(email,password){
        
        var data=JSON.stringify({
            user_email:email,
            user_password:password
        });
        

        return fetch('https://onlineshop-api.herokuapp.com/register/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:data
        })
        .then(res=>{
            res.json()
            .then(data=>{
                //save in local storage
                sessionStorage.setItem("user_id",data.user_id);
                sessionStorage.setItem("user_name",data.user_name);
                this.setState({
                    loggedin:true
                })
                //popup login successfull

            })
            
        })
        .catch(err=>{
            alert("wrong credentials")
        });

        //if success save in local storage and allow access
        //else show pop up wrong email or password
    }


    submit(){
        var email=this.email.current.value;
        var password=this.password.current.value;
        return this.login(email,password);
    }

   
    render(){
       
        //redirect to user
        
        return(
            <div>
            {this.state.loggedin? <Redirect to={{
  pathname: '/'}}/>
  :
            <div className="Login register-parent">
                <div className="heading register-element">
                    Login
                </div>
                <div className="email register-element">
                    <input className="input-field" placeholder="enter e-mail" ref={this.email}></input>
                </div>
                <div className="password register-element">
                    <input type="password" className="input-field" placeholder="enter password"ref={this.password}></input>
                </div>
                <div className="login register-element">
                    <button className="button" onClick={this.submit}>Submit</button>
                </div>
            </div>}
            </div>
        )
    }
}

export default Login;