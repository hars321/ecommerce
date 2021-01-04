import React from 'react';
import './Item.css';
import ProductImage from './ItemImage.js';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:""
        }
    }
    
    getId(){
    var url= window.location.href;
    let i=0;
    let id="";
    while(i<url.length){
        if(url[i]=='/'){
            id="";
        }
        else{
            id+=url[i];
        }
        i++;
    }
    return id;
    }
   componentDidMount(){
    var url= "http://localhost:4000/getdata/product/id/"+this.getId();
    
    fetch(url)
    .then(data=>data.json())
    .then(data=>{
        this.setState({
            data:data[0]
        }    )
        console.log(this.state.data)
    })
    .catch(data=>{
        console.log(data);
    })
   }
render(){
    return (
        <div className="Item">
            
            <div className="Top">
                
                <div className="Left">
                    {/* image */}
                    <div className="Item-Image">
                        <img src={this.state.data.product_image}></img>
                    </div>
                </div>

                <div className="Right"> 
                    
                    
                    <div className="Item-Details">
                        
                        <div className="Item-Name">
                            <h1>
                                {this.state.data.product_name}
                            </h1>
                        </div>
                            
                        <div className="Item-Category">
                            <h5>
                                {this.state.data.product_category}
                            </h5>
                        </div>

                        <div className="Item-Description">
                            <h3>
                                {this.state.data.product_description}
                            </h3>
                        </div>
                            
                        <div className="Item-Price">
                            <h2>
                                ${this.state.data.product_price}
                            </h2>
                        </div>
                            {/* <div className="Item-Name">
                                <h2>{this.state.name}</h2>
                            </div>

                            <div className="Item-Description">
                                <p>{this.state.description}</p>
                            </div>

                            <div className="Item-Price">
                                <h3>{this.state.price}</h3>
                            </div> */}

                        </div>
                    </div>

            </div>
            <div className="Bottom">
                {/* comments */}
                <div className="Item-Comments">
                    {/* <Comments data={this.state.comments}/> */}
                </div>
            </div>
        </div>
       );
}

}

export default App;
