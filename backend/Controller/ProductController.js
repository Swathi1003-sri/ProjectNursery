const ProductModel = require("../Model/ProductModel");

// ===================================== ADD PRODUCT START =========================================

const addProduct = async(req , res) =>{
    try{
        const { category, type,name,desc,price,img} = req.body
        const ProductData = new ProductModel({
            category,type,name,desc,price,img
        })
         await ProductData.save()
        res.status(200).send("Product Added !")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}

// ===================================== ADD PRODUCT END =========================================


// ===================================== GET PRODUCT START =========================================

const getProduct = async(req,res)=>{
    try{
        var productList = await ProductModel.find()
        res.status(200).send(productList)
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}

// ===================================== GET PRODUCT END =========================================


// ===================================== DELETE PRODUCT START =========================================

const deleteProduct = async(req , res)=>{
    try{
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Product Removed !")
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}

// ===================================== DELETE PRODUCT END =========================================


// ===================================== UPDATE PRODUCT START =========================================

const updateProduct = async(req , res)=>{
    try{
       var UpdateProduct = await ProductModel.findByIdAndUpdate(req.params.id , req.body , {now:true})
       res.status(200).send(UpdateProduct)
    }
    catch(err){
        res.status(404).send(`Error Name:${err.name} , Error Message:${err.message}`)
    }
}

// ===================================== UPDATE PRODUCT END =========================================


// ===================================== MODULE EXPORTS =========================================

module.exports = {addProduct , getProduct , deleteProduct , updateProduct}