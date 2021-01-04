import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import './Main.css';
import Register from './components/Register';
import ShopProduct from './components/ShopProduct';
import Shopcategory from './components/ShopCategory';
import Shop from './components/Shop';
import Item from './components/Item/Item';
import addProductPage from './components/AddProduct/AddProductPage';
import { Router, Route,Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state=({
      loggedin:sessionStorage.hasOwnProperty("user_id")
    })
  }
  componentDidMount(){
    this.setState({
      loggedin:sessionStorage.hasOwnProperty("user_id")
    })
  }
  render(){
    return (
      <div>
        {this.state.loggedin?
        <Navbar loggedin={this.state.loggedin}/>
        :
        <Navbar loggedin={this.state.loggedin}/>
        }
        
        <BrowserRouter>
          
        <Route exact path='/' component={Maincontent}></Route>
        <Route exact path='/product' component={ShopProduct}></Route>
        <Route exact path='/nearby' component={Shopcategory}></Route>
        <Route exact path='/addProduct' component={addProductPage}></Route>
        <Route path='/shop/:id' component={Shop}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/item' component={Item}></Route>
        </BrowserRouter>
        {/* <Maincontent/>
        <Shopbyproduct/> */}
      </div>
     );
  }
}


export default App;
