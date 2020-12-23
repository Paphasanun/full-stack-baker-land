require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const db = require("./models");

const userRoutes = require("./routes/user");
const addressRoutes = require("./routes/address");
const cakeRoutes = require("./routes/cake")
const shapeRoutes = require("./routes/shape")
const sizeRoutes = require("./routes/size")
const flourRoutes = require("./routes/flour")
const sweetRoutes = require("./routes/sweet")
const layerRoutes = require("./routes/layer")
const flavorRoutes = require("./routes/flavor")
const fillingRoutes = require("./routes/filling")
const addOnFillingRoutes = require("./routes/addOnFilling")
const frostingRoutes = require("./routes/frosting")
const dressingRoutes = require("./routes/dressing")
const toppingRoutes = require("./routes/topping")
const cakeDetailRoutes = require("./routes/cakeDetail")


require("./config/passport");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/address", addressRoutes);
app.use("/cake", cakeRoutes)
app.use("/shape", shapeRoutes)
app.use("/size", sizeRoutes)
app.use("/flour", flourRoutes)
app.use("/sweet", sweetRoutes)
app.use("/layer", layerRoutes)
app.use("/flavor", flavorRoutes)
app.use("/filling", fillingRoutes)
app.use("/add-on-filling", addOnFillingRoutes)
app.use("/frosting", frostingRoutes)
app.use("/dressing", dressingRoutes) 
app.use("/topping", toppingRoutes) 
app.use("/cake-detail", cakeDetailRoutes)



app.listen(process.env.PORT, () => {
  console.log(`Server starting on Port ${process.env.PORT}`);
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Completed Connect And Sync");
});
