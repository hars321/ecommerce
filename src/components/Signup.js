import React from 'react';
import { Redirect } from 'react-router';
import {showPosition} from './location/Location.js';

const { Component } = require("react");

class Signup extends Component{
    constructor(props){
        super(props);
        this.username=React.createRef();
        this.email=React.createRef();
        this.password=React.createRef();
        this.submit=this.submit.bind(this);
        var user_latitude=0.0;
        var user_longitude=0.0;
        this.state={
            loggedin:false
        }
    }
    
    componentDidMount(){
        if(sessionStorage.hasOwnProperty('user_id')){
            this.setState({
                loggedin:true
            })
        }
        showPosition().then(data=>{
            this.user_latitude=data.latitude;
            this.user_longitude=data.longitude;
        })
        
    }
    register(username,email,password){
        console.log(username)
        if(username !="" && email!="" && password!=""){

        
        var data=JSON.stringify({
            user_name:username,
            user_email:email,
            user_password:password,
            user_image:null,
            user_type:0,
            latitude:this.user_latitude||0.0,
            longitude:this.user_longitude||0.0
        })
        fetch('https://onlineshop-api.herokuapp.com/register/signup',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:data
        })
        .then(data=>{
            data.json().then(data=>{
                console.log(data);
                sessionStorage.setItem('user_id',data.user_id);
                sessionStorage.setItem('user_name',data.user_name);
                this.setState({
                    loggedin:true
                })
            })
            
            // localStorage.setItem('user_id',data)
        })
        .catch(err=>console.log(err));
    }
    else{
        alert("Fields can not be null")
    }
    }
    submit(){
        var username=this.username.current.value;
        var email=this.email.current.value;
        var password=this.password.current.value;
        
        this.register(username,email,password);
    }
    render(){
        return(
            <div>
            {this.state.loggedin?<Redirect to={{
            pathname: '/user'}}/>:
            <div className="Signup register-parent " >
                <div className="heading register-element">
                    Signup
                </div>
                <div className="username register-element">
                    <input id="username" className="input-field" placeholder="enter username" ref={this.username}></input>
                </div>
                <div className="email register-element">
                    <input className="input-field" placeholder="enter e-mail" ref={this.email}></input>
                </div>
                <div className="password register-element">
                    <input type="password" className="input-field" placeholder="enter password" ref={this.password}></input>
                </div>

                <div className=" register-element">
                    <button className="button" onClick={this.submit}>Submit</button>
                </div>
            </div>
        }
        </div>
        )
    }
}

export default Signup;