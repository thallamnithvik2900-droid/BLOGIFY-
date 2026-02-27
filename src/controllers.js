// src/controllers.js

exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All posts fetched successfully"
  });
};

exports.createPost = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: req.body
  });
};
