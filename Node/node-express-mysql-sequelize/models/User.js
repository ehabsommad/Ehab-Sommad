const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

//The define model will be transformed to A new CREATE TABLE SQL Query
const User = sequelize.define("user",{
    id: {
        type:Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING(100),
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = User;
