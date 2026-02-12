const express = require("express");
const router = express.Router();

// controller is in SAME src folder
const postController = require("./controllers");

router.get("/", postController.getAllPosts);

module.exports = router;
