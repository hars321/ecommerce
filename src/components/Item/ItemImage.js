import React from 'react';
// import "./ItemImage.css";

class App extends React.Component{
constructor(props){
    super(props);
    this.state={
        images:this.props.images
    }
}


render(){
    return (
        <div className="Item">
            <div className="Main-Image">
                <img src={this.props.images}></img>

            </div>
            <div className="Image-List">
                {this.ImageList}
            </div>
        </div>
       );
}

}

export default App;
