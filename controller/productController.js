const productList = require('../db/db');
const z  = require('zod')

// check valid id
const checkId= (req,res,next,val)=>{
    console.log(val)
    const product = productList.find((product) => product.id == val);
    if(!product){
        return res.status(404).json({
            status:"error",
            message:"invalid id"
        })
    }
    next();
}
const getAllProdect = (req,res)=>{
    res.json(productList);
}
const getSingleProduct = (req,res)=>{
    const product = productList.find((product) => product.id == req.params.id);
    res.json(product);
    
}

const validateData = (req,res,next)=>{
    try {
        const schema = z.object({
            id:z.number(),  
            title: z.string(),
            price: z.number(),
            description: z.string(),
            categoryId: z.number(),
            images: z.array(z.string()),
        });
    
        req.body = schema.parse(req.body);
        next();
      } catch (error) {
        res.status(400).json(error.message);
      }
}
const addItem = (req,res)=>{
    productList.push(req.body);
    res.status(201).json({
        status:"success",
        message:"item added"
    })
}
const updateItem =(req,res)=>{
    const product= productList.find((item) => item.id ===req.params.id*1);
    const i = productList.findIndex((product) => product.id ===req.params.id*1 );
    productList[i] = Object.assign({}, productList[i], req.body); 
    res.status(201).json({
        status:"success",
        message:"item added"
    });
}
const deleteItem = (req,res)=>{
    const product = productList.find((product) => product.id == req.params.id);
    productList.splice(productList.indexOf(product),1);
    res.status(202).json({
        status:"success",
    message:"item deleted"
    })

}

module.exports = [getAllProdect,getSingleProduct,checkId,validateData,addItem,deleteItem,updateItem]