//require: express
const express = require('express');
const { body } = require('express-validator');
const { index, show, store, update, destroy } = require('../controllers/product-controller');
const Category = require('../models/Category');
const Product = require('../models/Product');

//instanse: Router
const router = express.Router();

//router: Routes
router.get('/',index);
router.get('/:id',show);
router.post('/',
[
    body("gender")
    .notEmpty()
    .withMessage("Enter gender value")
    .isIn("M" , "F" , "m" , "f")
    .withMessage("Gender must be either M or F"),
    body("category_id")
    .isNumeric({no_symbols:true})
    .custom((value, { req }) => {
        return Category.findByPk(value).then((result) => {
            if(!result){
                return Promise.reject("Category not exist")
            }
        })
    }),
    body("name")
    .trim()
    .notEmpty()
    .withMessage('Field name is required')
    .isAlphanumeric()
    .isLength({min:3 , max:30})
    .withMessage('Field name must be between 3 & 30 value')
    .custom((value, { req }) => {
        return Product.findOne({where: {name: value}})
        .then((result) => {
            if(result){
                return Promise.reject("Name value exists in products");
            }
        })
    }),
    // .withMessage(""),
    body("price")
    .isNumeric({no_symbols:true})
    .withMessage("Price must be a valid Number")
    .isFloat({min: 1, max: 200})
    // .custom((value , { req }) => {
    //     if(value >= 0 && value <= 500 ){
    //         return true;
    //     }
    //     return false;
    // })
    // .isLength({min:0 , max:500})
    .withMessage("Price must be between 0 to 500")
],store);
router.put('/:id',update);
router.delete('/:id',destroy);

module.exports = router;