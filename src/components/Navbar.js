import React, { Component } from 'react';
import './css/Navbar.css';
import logo from './images/logo.png'

class Navbar extends Component{
  constructor(props){
    super(props)
      this.state={
        loggedin:this.props.loggedin,
        user_name:"User",
        user_id:"/user/"
      }
      this.logout=this.logout.bind(this);
  }
  componentDidMount(){
    
    if(this.props.loggedin){
      this.setState({
        loggedin:true,
        user_name:sessionStorage.getItem("user_name"),
        user_id:sessionStorage.getItem("user_id")
      })
    }
    
  }
  logout(){
    sessionStorage.clear();
    this.setState({
      loggedin:false
    })
  }
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a href="/">
      < img className="logo" src={logo}></img>
      </a>
      <a class="navbar-brand" href="/">E-SHOP</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register-seller">Start Selling</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Search Nearby
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/product">Product</a>
              <a class="dropdown-item" href="/nearby">Category</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/sellers/nearby">Seller</a>
              <a class="dropdown-item" href="/shop/nearby">Shop</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={this.state.user_id} tabindex="-1" aria-disabled="true">{this.state.user_name}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0" action="./register">
          {
            this.state.loggedin?<button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.logout}>Logout</button>:
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login / Signup</button>
          }
        
        </form>
      </div>
    </nav>
    )
  }
}
// function App() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//     < img className="logo" src={logo}></img>
//     <a class="navbar-brand" href="/">E-SHOP</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
  
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav mr-auto">
//         <li class="nav-item active">
//           <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/register-seller">Start Selling</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Search Nearby
//           </a>
//           <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <a class="dropdown-item" href="/product">Product</a>
//             <a class="dropdown-item" href="/category">Category</a>
//             <div class="dropdown-divider"></div>
//             <a class="dropdown-item" href="/sellers/nearby">Seller</a>
//           </div>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{this.state.user_name}</a>
//         </li>
//       </ul>
//       <form class="form-inline my-2 my-lg-0">
      
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login / Signup</button>
//       </form>
//     </div>
//   </nav>
//   );
// }

export default Navbar;
