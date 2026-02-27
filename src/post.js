const express = require("express");
const router = express.Router();

const postController = require("./controllers");

router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);

module.exports = router;
