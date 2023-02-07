const { validationResult } = require('express-validator');
const Category = require('../models/Category')
const Product = require('../models/Product')

exports.index = async (req,res) => {
    let categories = await Category.findAll({
        include: Product,
    });
    // let products = await category.getProducts()
    return res.status(200).json({status:true, data:categories});
}

exports.show = async (req,res) => {
    let category = await Category.findByPk(req.params.id,{
        include: Product,
    });
    let products = await category.getProducts();
    if(category != null){
        return res.status(200).json({status:true, data: products});
    }else{
        return res.status(404).json({status:false});
    }
    
}

exports.store = async (req,res) => {
    let errors = validationResult(req);
    if(errors.isEmpty()){
        let response = await Category.create({name: "Test Category - #2"});
        return res.status(201).json({status:true, response: response})
    }else{
        return res.status(400).json({status:false , message:errors.array()[0].msg })
    }
}

exports.update = (req,res) => {}

exports.destroy = (req,res) => {}