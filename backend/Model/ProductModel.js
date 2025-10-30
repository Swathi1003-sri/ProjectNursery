const mongoose = require("mongoose")

const ProductShema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

const ProductModel = mongoose.model("Product",ProductShema)

module.exports = ProductModel