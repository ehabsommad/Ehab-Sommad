// First : require
const bodyParser = require("body-parser");
const express = require("express");
const HttpError = require("./models/http-error");
const noteRoutes = require("./routes/note-routes");
const userRoutes = require("./routes/user-routes");
//Second: express instanse
const app = express();

//Middlewares 
app.use(bodyParser.urlencoded());

//Routes section
app.use("/api/users",userRoutes);
app.use("/api/notes",noteRoutes);

//fallback Route
app.use("/",(req,res) => {
    const error = new HttpError(404,"Not Found");
    throw error;
});

app.use((error,req,res,next) => {
    res.status(error.code).json({message:error.message});
});

//Third : Listen
app.listen(5000);