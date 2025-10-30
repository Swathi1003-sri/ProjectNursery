const express = require("express")
const ProductRouter = express.Router()

const { addProduct , getProduct , deleteProduct , updateProduct} = require("../Controller/ProductController")

ProductRouter.post("/add",addProduct)
ProductRouter.get("/productget",getProduct)
ProductRouter.delete("/delete/:id",deleteProduct)
ProductRouter.put("/update/:id",updateProduct)

module.exports = ProductRouter