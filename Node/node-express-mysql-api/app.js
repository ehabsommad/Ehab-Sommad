//required modules:
const bodyParser = require("body-parser");
const express = require("express");
const userRoutes = require("./routes/user-routes");
const noteRoutes = require("./routes/note-routes");
const HttpErorr = require("./models/HttpError");

//express: instanse
const app = express();

//express: use middlewares
app.use(bodyParser.urlencoded());

//express: use routes
app.use("/api/users",userRoutes);
app.use("/api/notes",noteRoutes);

//express: fallback-route
app.use("/",(req,res) => {
    throw new HttpErorr(404,"Not Found - 404")
});

//express: erorr catch
app.use((error,req,res,next) => {
    res.status(error.code).json({status:false,message: error.message})
});

//express: listen
app.listen(5000);