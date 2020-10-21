import React from 'react';
import './css/Product.css';
import './css/Seller.css';

class App extends React.Component{
 name=()=> {
    console.log(this.props.details);
}
   
render(){
    return (
        <div class="props">
         <div class="card">
       <img class="seller-image" src={this.props.details.picture.large} alt="Card image cap"/>
       <div class="card-body">
    <h5 class="card-title">{this.props.details.name.first } {this.props.details.name.last}</h5>
         {this.name}
        
         <a href="#" class="buy-button btn btn-primary">Go to shop</a>
       </div>
     </div>
        </div>
       );
}

}

export default App;
