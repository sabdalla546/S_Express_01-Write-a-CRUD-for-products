const express = require('express');
const [getAllProdect,getSingleProduct,checkId,validateData,addItem,deleteItem,updateItem] = require('../controller/productController');

const productRouter= express.Router();

productRouter.param('id',checkId)

productRouter.get('/',getAllProdect).post('/',validateData,addItem);
productRouter.get('/:id([0-9]+)',getSingleProduct).put('/:id([0-9]+)',validateData,updateItem).delete('/:id([0-9]+)',deleteItem);
module.exports=productRouter;



