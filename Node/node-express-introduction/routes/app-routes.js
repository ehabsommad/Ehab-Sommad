//Routes: Request (POST,PUT,PATCH,DELETE,GET)
//express module
const express = require('express');
const { check } = require('express-validator');
const { getUsers, storeUser, deletUser, updateUser } = require('../controllers/user-controller');
//router instanse
const userRoutes = express.Router();

//define routes
userRoutes.get("/", getUsers);
userRoutes.post("/store",[check("name").notEmpty().isLowercase().isAlpha().isLength({min:3})],storeUser);
userRoutes.delete("/:id/delete",deletUser);
userRoutes.put("/:id/update",updateUser);


//export app-routes.js module
module.exports = userRoutes;