const { Router } = require("express");
const AboutController = require("../controllers/about.controller.js");

const AboutRouter = Router();

AboutRouter.post("/create", AboutController.createAbout);

AboutRouter.get("/", AboutController.getAllAbouts);

AboutRouter.put("/update/:id", AboutController.updateAboutById);

AboutRouter.delete("/delete/:id", AboutController.deleteAboutById);

module.exports = AboutRouter;
