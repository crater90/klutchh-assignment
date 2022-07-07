const express = require('express')
const router = express.Router();
const userController = require('../controller/users');


router.post("/change-password", userController.changePassword);

module.exports = router;