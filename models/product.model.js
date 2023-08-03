const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
   title:String,
   image:String,
   desc:String,
   price:String
})

const ProductModel= mongoose.model("product",productSchema)

module.exports= {ProductModel}