import React, { Component } from 'react';
import Corousel from './Corousel';
import background from './images/pagebackground.jpg';
import circle1 from './images/circle1.png';
import circle2 from './images/circle2.png';
import './css/Maincontent.css';
import { Link} from 'react-router-dom';
import {showPosition} from './location/Location';
import corouselImage1 from './images/img1.jpg';
import corouselImage2 from './images/img2.jpg';
import corouselImage3 from './images/img3.jpg';
import Card from './Category/Card'
import Spinner from './Spinner';
import Category from './Category/Category';
import Product from'./Product/Product.js';


class App extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount=()=>{
    showPosition();
    //send to backend
  }
render(){
  return (
    <div class="page-body" >
        
      <div class="page-cover">
        <img class="page-image-top" src={background}></img>
        <div className="cover-name">
        <h1 class="cover-heading"> E-SHOP</h1>
        </div>
      <div class="circle-parent"> 
      <Link to="./nearby">
       <div className="circle">
          <img className="circle-image" src={circle1}></img>
          <div class="circle-text">
          <h3 class="circle-value">Nearby</h3>
          </div>
          
          
       </div>
       </Link>
       <Link to="./product">
       <div className="circle">
          <img className="circle-image" src={circle2}></img>
          <div class="circle-text">
          <h3 class="circle-value">Product</h3>
          </div>
       </div>
       
      </Link>
      </div>
      
      
      <div className="page-banner">

       <Corousel image1={corouselImage1} image2={corouselImage2} image3={corouselImage3}/>
      </div>

      
      <div className="browse-section ">
        <div className="Category blur">
          <div className="Category-Heading">
            <h1 className="categoryHeading">CATEGORY</h1>
          </div>
          <div className="Category-List blur">
              <Category/>
          </div>
        </div>
        <div className="Products ">
          <div className="Product-Heading">
            <h1 className="ProductHeading">PRODUCTS</h1>
          </div>
          <div className="Product-List blur">
              <Product/>
          </div>
        </div>
    

      </div>


      </div>
    </div>
    );
  }
}

export default App;
