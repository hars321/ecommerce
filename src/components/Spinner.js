import React, { Component } from 'react';
import './css/spinner.css';

class Spinner extends Component{
    render(){
        return(
            <div className=" spinner-parent">
               
            <div class="spinner-border text-secondary spinner-child" role="status">
                <span class="sr-only">Loading...</span>
            </div>
                <div className="spinnertextParent">
                <h1 className="spinnertext">Loading...</h1>
                </div>
            </div>
        )
    }
}

export default Spinner;