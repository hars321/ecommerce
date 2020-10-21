import React, {Component} from 'react';
import Card from './Card';
import Spinner from './Spinner';
import './css/explore.css';
import arrow1 from '../components/images/60995.svg'
var ReactDOM = require('react-dom');
class Category extends Component{
    
    constructor(props){
        super(props);
        this.state = {loading: 1,
                    currentPage:0,
                    category:[],
                    data:[],
                    pagecount:0
        }
        this.PageUp = this.PageUp.bind(this);
        this.PageDown = this.PageDown.bind(this);
    }
    
    componentDidMount=()=>{
      
        var cardStrip=[];
        function truncate(str){
            if(str.length>100){
                return str.substring(0,100)+"...";
            }
            return str;
        }
        fetch('http://localhost:4000/getdata/category').then(res => res.json()).then(data=>
           { console.log(data)
            var cards=[],i=0,j=0,k=0,len=data.length,pageCount=0;
            var categoryName=[];
            while(k<len){
                    var id=k;
                    var name=data[k].category_name;
                    var image=data[k].category_image;
                    var description=truncate(data[k].category_description);
                    
                    var card=<Card 
                    key={id}
                    image={image}
                    name={name}
                    description={description}
                    />

                    cards.push(card)
                    
                    if(cards.length==4 || k==len-1){
                      cardStrip.push(cards);
                      cards=[];
                      pageCount++;
                    }
                    k++;
                    
            }
              
                this.setState({loading:0,
                            category:categoryName,
                            data:cardStrip,
                          pagecount:pageCount});
            }
        )}
            

        PageUp(){
          var currentpage=this.state.currentPage;
          var nextpage=currentpage+1;
          if(nextpage<this.state.pagecount){
            this.setState({
              currentPage:nextpage
            })
          }
          
        }
        PageDown(){
          var currentpage=this.state.currentPage;
          var prevpage=currentpage-1;
          if(prevpage>=0){
            this.setState({
              currentPage:prevpage
            })
          }
        }
    render(){
        const loading=this.state.loading;
        return(
            <div className="explore" >
                
                {loading?
                <Spinner />
                :
                
                <div className="Explore-Category-parent" scroll="no">
                
                  <div className="Explore-Category-Name">
        
                   <div className="NavButtonup">
                        <img src={arrow1} onClick={this.PageDown} className="upbutton"></img>
                    </div>
                    <div className="product-class">
                        CATEGORY
                    </div>
                    
                    <div className="NavButtondown">
                        <img src={arrow1} onClick={this.PageUp} className="downbutton"></img>
                    </div>
                  </div>
                  
                  <div className="Explore-Category-Content">
                  
                    <div className="Category-strip">{this.state.data[this.state.currentPage]}
                    </div>
                  </div>
                  
                
                </div>
              }
            </div>
        )
        
    }
}
export default Category;