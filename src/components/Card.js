import React, {Component} from 'react';
import './css/Card.css';

class Card extends Component{
    render(){
        return(
            <div className="card-parent">
                <div className="card-image"id="card-image">
                    
                    <img src={this.props.image} className="cardImage"></img>
                </div>
                <div className="card-details" id="card-details">
                    <div  className="ProductDetails">
                        <div className="ProductName">
                            {this.props.name}
                        </div>
                        <div className="ProductCategory">
                            {this.props.category}
                        </div>
                    </div>
                    <div className="ProgramDescription">
                        {this.props.description}
                    </div>
                    <div className="buy">
                        <div className="ProductPrice">
                             {this.props.price}
                        </div>
                        <div className="product-buy">
                            <input type="button" className="addtocart" value="SEE MORE"></input>
                        </div>
                       
                       
                    </div>
                </div>

            </div>
        )
    }
}

export default Card;
