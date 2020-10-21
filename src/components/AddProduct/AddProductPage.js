import React from 'react';
import './AddProductPage.css';
import AddProductForm from './AddProductForm';



function App(props) {
  return (
  <div className="AddProductParent text-center">
      <h1 className="display-3"> Add Product</h1>
      <div className="AddProductFormParent container">
      <AddProductForm />
      
      </div>
      
  </div>
  );
}

export default App;
