const express = require("express");
const router = express.Router();
const users = require('../controllers/users')
router.get("/",users.users);
router.post("/register",users.postUser);
router.post("/login",users.loginUser);
router.post("/logout",users.logoutUser);

module.exports = router;
