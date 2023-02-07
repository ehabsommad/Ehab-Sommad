//require: models
const Category = require("../models/Category");
const Product = require("../models/Product");

const sequelize = require("./database");

module.exports = class SequelizeManger {
    authenticate() {
        sequelize
        .authenticate()
        .then(() => {
            console.log("Connected Successfully");
        })
        .catch((error) => {
            console.log("Connection Failed");
        });
    }

    modifyRelations() {
    //Category hasMany Products
        Category.hasMany(Product);
        //addProduct - addProducts - setProducts()
        //getProducts
        //countProducts
        //hasProduct
        //hasProducts
        //removeProduct
        //removeProducts

        
    //Product belongsTo Category
        Product.belongsTo(Category, {onDelete: "CASCADE"});
        //getCategory - setCategory -createCategory()
    }
    syncModels(callback) {
        sequelize
        .sync(/*{force: true}*/)
        .then((result) => {
            callback("Tables Created ",true);
        })
        .catch((error) => {
            callback("Failed to create tables!",false);
        });
    }
};
