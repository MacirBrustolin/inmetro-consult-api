const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.post("/post", postsController.postRegister);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);

module.exports = router;