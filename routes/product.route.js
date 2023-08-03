const {Router} = require("express")
const ProductController = require("../controllers/product.controller")

const ProductRouter= Router()

ProductRouter.post("/create",ProductController.productPost)

ProductRouter.get("/",ProductController.getProduct)

ProductRouter.delete("/delete/:id", ProductController.deleteProduct)

ProductRouter.put("/update/:id",ProductController.updateProduct)

module.exports= ProductRouter