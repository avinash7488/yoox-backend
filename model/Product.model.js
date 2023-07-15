const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    "category":String,
    "soldby": String,
    "title": String,
    "price": String,
    "image1": String,
    "image2": String,
    "image3": String,
    "image4": String,
},{
    versionKey:false
});

const ProductModel=mongoose.model("product",productSchema);

module.exports={ProductModel};