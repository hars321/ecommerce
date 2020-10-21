import React, {Component} from 'react';
import '../css/Category.css';
import Card from './Card';
import Spinner from 'react-bootstrap/Spinner';
import {showPosition} from './location/Location';

class ShopNearby extends Component{
    
    constructor(props){
        super(props);
        this.state = {loading: 1,
                    data:[]
        }
        
    }
    
    componentDidMount(){

        var position=showPosition()
        .then(data=>data.json())
        .then(pos=>{
            var cards=[];
            var latitude=pos.latitude
            var longitude=pos.longitude;
            fetch(`http://localhost:4000/getdata/seller?latitude=${latitude}&longitude=${longitude}&diameter=50`).then(res => res.json()).then(data=>
           {
            
                for(var i=0;i<data.length;i++){
                    var id=data[i].seller_id;
                    var name=data[i].seller_name;
                    var image=data[i].seller_image;
                    var shopid=data[i].shop_id;
                    
                    var card=<Card 
                    id={id}
                    image={image}
                    name={name}
                    shopid={shopid}
                    />
                    
                    cards.push(card);
                }
                this.setState({
                    loading:0,
                    data:cards});
            })
        })
    };
    render(){
        
        return(
            <div>
                
                {this.state.loading?<Spinner/>:<div className="Category-strip">{this.state.data}</div>}
            </div>
        )
    };
    
}

export default ShopNearby;