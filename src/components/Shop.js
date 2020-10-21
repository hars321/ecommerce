import React, { Component } from 'react';
import './css/Shop.css';
import imglogo from './images/circle1.png';
import SellerStrip from './SellerStrip';
import Error from './Error.js';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:"error"
          };
        //state
        //   {
        //       shop_id
        //       shop_name
        //       seller_name
        //       location
        //       seller_image
        //   }
    }
    componentDidMount(){
        var shop_id=this.props.match.params.id;
        fetch(`http://localhost:4000/shop/${shop_id}`).then(response=> response.json())
        .then(data=> {this.setState({value:data})
    });
}
    
    
    render(){
        if(this.state.value=="error"){
            return(
                <div>
                    <Error/>
                </div>
            )
        }
        else{
            return (
                <div>
        
                <div class="shopHeading center">
                    <img className="headingLogo" src={imglogo} height="200px" width="200px"></img>
                        <div className="ShopDetails">
                            <h1> {this.state.value.shop_name}</h1>
                            <h2>{this.state.value.location}</h2> 
                        </div>
                    <div>
                      
                    </div>
                   
                </div>
                <div>
                    <p className="product">Product</p>
                </div>
                </div>
            )
        }
       
    }
}


export default App;