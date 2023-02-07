//require: modules
//express
const express = require("express");

//express-validator
const { body } = require("express-validator");
const { index, show, store, update, destroy } = require("../controllers/user-controller");

//express: router
const router = express.Router();

//router: HTTP Methods
/**
 * @method index
 * @HttpMethod GET
 * @ControllerFunction index
 * @return
 */
router.get(
    '/',[body("key").trim().notEmpty().withMessage("Message Here !")],
    index
    );
/**
 * @method show
 * @HttpMethod GET
 * @ControllerFunction show
 * @return
 */
router.get(
    '/:id',[body("key").trim().notEmpty().withMessage("Message Here !")],
    show
    );
/**
 * @method store
 * @HttpMethod POST
 * @ControllerFunction store
 * @return
 */
router.post(
    '/',[body("key").trim().notEmpty().withMessage("Message Here !")],
    store
    );
/**
 * @method update
 * @HttpMethod PUT
 * @ControllerFunction update
 * @return
 */
router.put(
    '/:id',[body("key").trim().notEmpty().withMessage("Message Here !")],
    update
    );
/**
 * @method destroy
 * @HttpMethod DELETE
 * @ControllerFunction destroy
 * @return
 */
router.delete(
    '/:id',[body("key").trim().notEmpty().withMessage("Message Here !")],
    destroy
    );

//export: module (Router)
module.exports = router;