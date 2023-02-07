//require modules
const express = require("express");
const { check } = require("express-validator");
const { index, show, store, update, destroy } = require("../controllers/user-controller");
const User = require("../models/User");

//express: Router instanse
const router = express.Router();

// const validationRules =     [
//     check("email").normalizeEmail().isEmail().exists(),
//     check('name').notEmpty().isAlpha().isLength({min:3 , max:20}),
//     check('password')
//     .notEmpty()
//     .isAlpha()
//     .isNumeric()
//     .isStrongPassword({
//         minLength:3,
//         minLowercase:1,
//         minUppercase:1,
//         minSymbols:1,
//         minNumbers:1
//     })
//     .isLength({min : 3 , max :15}),
// ];

//router: routes
router.get('/',index);
router.get('/:id',show);
router.post('/',User.validationRules,store);
router.put('/:id',User.validationRules,update);
router.delete('/:id',destroy);



//module: export
module.exports = router;

/**
 * Routes Naming:
 * index     GET        http://127.0.0.1:5000/api/users
 * show      GET        http://127.0.0.1:5000/api/users/{:user}
 * creat     GET        http://127.0.0.1:5000/api/users/create
 * store     POST       http://127.0.0.1:5000/api/users
 * edit      GET        http://127.0.0.1:5000/api/users{:user}/edit
 * updat     PUT        http://127.0.0.1:5000/api/users/{:user}
 * destroy   DELETE     http://127.0.0.1:5000/api/users/{:user}
 */