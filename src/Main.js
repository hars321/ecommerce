import React from 'react';
import Navbar from './components/Navbar';
import Maincontent from './components/Maincontent';
import './Main.css';
import Register from './components/Register';
import ShopProduct from './components/ShopProduct';
import Shopcategory from './components/ShopCategory';
import Shop from './components/Shop';
import addProductPage from './components/AddProduct/AddProductPage';
import { Router, Route,Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
   <div>
     <Navbar/>
     <BrowserRouter>
       
     <Route exact path='/' component={Maincontent}></Route>
     <Route exact path='/product' component={ShopProduct}></Route>
     <Route exact path='/nearby' component={Shopcategory}></Route>
     <Route exact path='/addProduct' component={addProductPage}></Route>
     <Route path='/shop/:id' component={Shop}></Route>
     <Route path='/register' component={Register}></Route>
     </BrowserRouter>
     {/* <Maincontent/>
     <Shopbyproduct/> */}
   </div>
  );
}

export default App;
