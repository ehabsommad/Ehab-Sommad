//require: body-parser
const bodyParser = require("body-parser");

//require:express
const express = require("express");

//require: user-routes
const userRoutes = require("./routes/user-routes");
const sequelize = require("./utils/database");

//instanses: express
let app = express();

//express: routes
app.use("/api/users",userRoutes);

//sequelize: Authenticated & connected & Created Tables
sequelize
.sync()
.then(() => {
    console.log("Connected & Tables Created");
    //express: listen
    app.listen(5000);
})
.catch(() => {
    console.log("Connection error!");
})




//use: body-parser
app.use(bodyParser.urlencoded());