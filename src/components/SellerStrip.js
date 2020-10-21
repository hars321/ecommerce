import React from 'react';
import "./css/Productstrip.css";
import Seller from './Seller';
//take details as props -->imgUrl name price




function App(props) {
    var city_name="Greater Noida";
    var count=6;
    var arr=[];
  for(var i=0;i<count;i++){
    arr.push(<Seller details={props.details[i]}/>)
    
  } 
  

    
    // console.log(props.details);
  return (
   <div className="product-strip-parent">
       <div class="product-strip-child">
        <div class="product-category">
        <h3> Sellers nearby</h3>
        </div>
       <div className="product-spread">
        {[...arr]}
       </div>
       </div>
   </div>
  );
}


export default App;
