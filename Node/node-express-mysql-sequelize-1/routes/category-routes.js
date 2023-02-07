//require: express
const express = require('express');
const { body } = require('express-validator');
const { index, show, store, update, destroy } = require('../controllers/category-controller');

//instanse: Router
const router = express.Router();

//router: Routes
router.get('/',index);
router.get('/:id',show);
router.post('/',
[
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name Must not be empty")
    .isLength({min:3 , max:10})
    .withMessage("Name must be between 3 - 10 charachters length")
],store);
router.put('/:id',update);
router.delete('/:id',destroy);

module.exports = router;