//require: modules
//express
const express = require("express");

//routes
const userRoutes = require("./routes/user-routes");

//mongo-database
const mongo = require("./utils/database")

//express: instance
const app = express();

//express: use midlewares
//express: url-encoded (parser)
app.use(express.urlencoded());

//routes
app.use("/api/users", userRoutes);
// app.use("/");

//monfodb: connection
mongo.connect((status) => {
    if(status){
        //express: listen
        app.listen(5000);
    }
})

// mongo.database();