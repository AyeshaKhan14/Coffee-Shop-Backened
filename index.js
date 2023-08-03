const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors = require('cors');
app.use(express.json())
app.use(cors())
const ProductRouter = require("./routes/product.route.js");
const { ContactRouter } = require("./routes/contact.route.js");
const AboutRouter = require("./routes/about.route.js");


app.use("/",ProductRouter)
app.use("/contact",ContactRouter)
app.use("/about",AboutRouter)


const PORT = 8000;
const MONGO_URI =
  "mongodb+srv://ayeshatravels9:dJtFblwGN3dYMicV@mycluster.cgrerhi.mongodb.net/Shivila";


mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


 
  

  app.use((req, res) => {
      return res.status(400).send({ status: false, message: "End point is incorrect" })
  });


  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


