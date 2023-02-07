//require: body-parser
const bodyParser = require("body-parser");

//require: routes
const categoryRoutes = require('./routes/category-routes');
const productRoutes = require('./routes/products-routes')

//require: sequelize
const sequelize = require('./utils/database');

//require: SequelizeManger
const sequelizeManger = require('./utils/sequelize-manger');
const manger = new sequelizeManger();


//require: models
const Category = require('./models/Category');
const Product = require('./models/Product');

//require: express
const express = require("express");
const SequelizeManger = require("./utils/sequelize-manger");

//instanse: express
const app = express();

//express: use middlewares
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded());

//express: use middlewares (routes)
app.use('/api/categories',categoryRoutes);
app.use('api/products',productRoutes)

//sequelize-manger: Sync & Relations:
//sequelize-manger: Authenticate (Connection Check)
manger.authenticate();

//sequelize: Sync (Create tables from models)
manger.syncModels((message,status) => {
    if(status){
        app.listen(5000);
    }

});

//sequelize: Sync & Relations:
manger.modifyRelations();

//express: listen
