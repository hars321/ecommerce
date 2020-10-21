import React from 'react';
import './AddProductForm.css';



function submitData(data){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
fetch('https://onlineshop-api.herokuapp.com/add-new-product', requestOptions)
    .then(response => response.json())
                    
}


function getData() {
  var product_id=document.getElementById("product_id").value;
  var shop_id=document.getElementById('shop_id').value;
  var location=document.getElementById('location').value;
  var product_image=document.getElementById('product_image').value;
  var category=document.getElementById('category').value;
  var product_name=document.getElementById('product_name').value;
  var product_descr=document.getElementById('product_descr').value;
  var product_price=document.getElementById('product_price').value;
  // console.log(product_id,shop_id,location,product_image,category,product_name,product_descr,product_price);
  
  var data={
    "product_id":product_id,
    "shop_id":shop_id,
    "location":location,
    "product_image":product_image,
    "category":category,
    "product_name":product_name,
    "product_descr":product_descr,
    "product_price":product_price
  }
  submitData(data);
}

function App(props) {
 
  return (
  
      <div className="formParent">
          
          <form className="addProduct">

            <div class="form-group">
              <label for="product_id">Product Id</label>
              <input type="text" class="form-control" id="product_id"/>
            </div>

            <div class="form-group">
              <label for="shop_id">Shop Id</label>
              <input type="text" class="form-control" id="shop_id"/>
            </div>

            <div class="form-group">
              <label for="location">Location</label>
              <input type="text" class="form-control" id="location" />
            </div>

            <div class="form-group">
              <label for="product_image">Image Url</label>
              <input type="text" class="form-control" id="product_image" />
            </div>

            <div class="form-group">
              <label for="category">Category</label>
              <input type="text" class="form-control" id="category" />
            </div>

            <div class="form-group">
              <label for="product_name">Product Name</label>
              <input type="text" class="form-control" id="product_name" />
            </div>

            <div class="form-group">
              <label for="product_descr">Product Desription</label>
              <input type="text" class="form-control" id="product_descr" />
            </div>

            <div class="form-group">
              <label for="product_price">Product Price</label>
              <input type="text" class="form-control" id="product_price"/>
            </div>
            <input type="button" class="ProductSubmit btn btn-primary" onClick={getData} value="Add Product"/>
          </form>
          
      </div>
  );
}


export default App;
