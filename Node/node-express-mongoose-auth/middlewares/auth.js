/**
 * Determine if the user is authenticated by verifying authorization token header
 */

const jwt = require("jsonwebtoken");
const TokenController = require("../controllers/token-controller");

module.exports = async (req, res, next) => {
  //1- Get authroization token from header
  let authHeader = req.get("Authorization");
  if (authHeader) {
    let decodedToken;
    try {
      decodedToken = jwt.verify(authHeader, "we-start-secret-key-jwt-$*");
      if (decodedToken) {
        console.log(decodedToken);
        req.userId = decodedToken.id;
        req.tokenId = decodedToken.tokenId;

        let accessToken = await TokenController.getAccessToken(req.tokenId);
        if (!accessToken.revoked && accessToken.expiresIn >= Date.now()) {
          next();
        } else {
          res.status(401).json({ status: false, message: "Token revoked" });
        }
      } else {
        res.status(401).json({ status: false, message: "Error in decoding" });
      }
    } catch (error) {
      res
        .status(401)
        .json({ status: false, message: "Failed to verify token" });
    }
  } else {
    res.status(401).json({ status: false, message: "Unauthenticated request" });
  }
};
