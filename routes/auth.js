const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { loginCheck, isAuth } = require("../middleware/auth");

router.post("/signup", authController.postSignup);
router.post("/signin", authController.postSignin);
router.post("/user", loginCheck, isAuth, authController.allUser);

module.exports = router;
