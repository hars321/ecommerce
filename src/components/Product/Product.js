import React, {Component} from 'react';
import '../css/Category.css';
import Card from './Card';
import Spinner from '../Spinner'

class Category extends Component{
    
    constructor(props){
        super(props);
        this.state = {loading: 1,
                    data:[]
        }
        
    }
    
    componentDidMount=()=>{
        var cards=[];
        function truncate(str){
            if(str.length>60){
                return str.substring(0,60)+"...";
            }
            return str;
        }
        fetch('https://onlineshop-api.herokuapp.com/getdata/product/random/4').then(res => res.json()).then(data=>
           {
            
                for(var i=0;i<data.length;i++){
                    var id=data[i].product_id;
                    var name=data[i].product_name;
                    var image=data[i].product_image;
                    var category=data[i].product_category;
                    var description=truncate(data[i].product_description);
                    var price=data[i].product_price;
                    var card=<Card 
                    id={id}
                    image={image}
                    name={name}
                    category={category}
                    description={description}
                    price={`$ ${price}`}
                    />
                    
                    cards.push(card);
                }
                this.setState({loading:0,
                            data:cards});
            }
        )}

    render(){
        return(
            <div>   
                {this.state.loading?<Spinner/>:<div className="Category-strip">{this.state.data}</div>}
            </div>
        )
        
    }
}
export default Category;