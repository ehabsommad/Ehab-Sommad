//modules: require
const express = require("express");
const {
  login,
  verify,
  forgotPassword,
  resetPassword,
  info,
  addClients,
  signout,
  multiLogin,
  loginWithPreviousRevoke,
} = require("../controllers/auth-controller");
const auth = require("../middlewares/auth");

//Router: instance
const router = express.Router();

/**
 * @method POST
 * @controllerMethod login
 */
router.post("/login", [], login);

/**
 * @method POST
 * @controllerMethod login
 */
router.post("/multi-login", [], multiLogin);

/**
 * @method POST
 * @controllerMethod login
 */
router.post("/login-with-revoke", [], loginWithPreviousRevoke);

/**
 * @method POST
 * @controllerMethod verify
 */
router.post("/verify", [], verify);

/**
 * @method POST
 * @controllerMethod forgotPassword
 */
router.post("/password/forgot", [], forgotPassword);

/**
 * @method POST
 * @controllerMethod forgotPassword
 */
router.post("/password/reset", [], resetPassword);

/**
 * @method POST
 * @controllerMethod forgotPassword
 */
router.get("/info", auth, [], info);

/**
 * @method GET
 * @controllerMethod signout
 */
router.get("/signout", auth, [], signout);

// router.get("/generate-tokens", addClients);

//module: exports
module.exports = router;
