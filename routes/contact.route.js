const {Router} = require("express")
const ContactController = require("../controllers/contact.controller.js")

const ContactRouter = Router()

ContactRouter.post("/create",ContactController.postContact)

ContactRouter.get("/",ContactController.getContact)

module.exports={ContactRouter}