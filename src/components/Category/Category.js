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
        fetch('https://onlineshop-api.herokuapp.com/getdata/category/4').then(res => res.json()).then(data=>
           {console.log(data);
            
                for(var i=0;i<data.length;i++){
                    var name=data[i].category_name;
                    var image=data[i].category_image;
                    var description=truncate(data[i].category_description);
                    var card=<Card 
                    
                    image={image}
                    name={name}
                    description={description}
                    />
                    console.log(card);
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