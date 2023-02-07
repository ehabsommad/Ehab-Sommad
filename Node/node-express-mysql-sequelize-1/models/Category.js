const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

module.exports = sequelize.define('category',{
    id:{
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Sequelize.STRING(50),
        allowNull: false,
    },
},
{
    paranoid: true,
    timestamps:true,
    deletedAt: "deletedAt",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    tableName: "categories",
}
);