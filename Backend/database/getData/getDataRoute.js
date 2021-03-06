var express = require('express');
var router = express.Router();

// const getCategoryNearby=require('./categoryNearby.js');
const productDetails=require('./productDetails.js');
const sellerDetails=require('./sellerDetails.js');
const shopDetails=require('./shopDetails.js');
const userDetails=require('./userDetails');
const categoryDetails=require('./categoryDetails');

router.get('/product', function(req, res){
   productDetails.getData()
   .then(data=>{
      console.log(data);
      res.send(data);
   }).catch(err=>{
      console.log(err);
      res.send(err);
   })
});

router.get('/product/random/:count',function(req,res){
   productDetails.getRandomProductHavingCount(req.params.count)
   .then(data=>{
      console.log(data);
      res.send(data);
   }).catch(err=>{
      console.log(err);
      res.send(err);
   })
   
})
router.get('/product/id/:id',function(req,res){
   productDetails.getProductWithId(req.params.id)
   .then(data=>{
      res.send(data);
   })
   .catch(err=>{
      res.send(err)
   });
})
// router.get('/seller/id/:id',function(req,res){
//    productDetails.getDataWithId("seller",req.params.id)
//    .then(data=>{
//       res.send(data).status(200);
//    })
//    .catch(res.send(err)).status(400);
// })

router.get('/product/:count', function(req, res){

   productDetails.getDatahavingCount(req.params.count)
   .then(data=>{
      res.send(data);
   })
   .catch(err=>{
      res.send(err);
   })
   
});
router.get('/category', function(req, res){
   categoryDetails.getData()
   .then(data=>{
      console.log(data);
      res.send(data);
   }).catch(err=>{
      console.log(err);
      res.send(err);
   })
   
});
router.get('/category/:count', function(req, res){
   categoryDetails.getDatahavingCount(req.params.count)
   .then(data=>{
      console.log(data);
      res.send(data);
   }).catch(err=>{
      console.log(err);
      res.send(err);
   })
   
});
router.get('/category/random/:count', function(req, res){
   categoryDetails.getRandomCategoryHavingCount(req.params.count)
   .then(data=>{
      console.log(data);
      res.send(data);
   }).catch(err=>{
      console.log(err);
      res.send(err);
   })
   
});


router.get('/all-user',(req,res)=>{
   userDetails.getData().then(data=>res.send(data)).catch(err=>res.send(err));
})


module.exports=router;