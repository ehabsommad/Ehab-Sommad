const User = require("../models/user");

exports.index = (req,res) => {
    let data = User.all();
    res.status(200).json({});
} 

exports.show = (req,res) => {
    let item = User.find(1);
    res.status(200).json({});
}

exports.store = (req,res) => {
    let user = new User();
    user.name = "";
    let isSaved = user.save();
    res.status(200).json({});
} 
exports.update = (req,res) => {
    let user = User.find(1);
    user.name = "UpdatedName";
    let isUpdated = user.update();
    res.status(200).json({});
}

exports.destroy = (req,res) => {
    let deleted = User.destroy(1);
    res.status(200).json({});
}