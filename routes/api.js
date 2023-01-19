const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const postsController = require("../controllers/posts");
const { ensureAuth } = require("../middleware/auth");

//Main Routes 
// router.get("/", homeController.getIndex);
router.get("/register", postsController.getProfile);

//Routes for user login/signup
router.post("/login", authController.postLogin);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);

module.exports = router;

