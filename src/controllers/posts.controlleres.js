const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "All posts fetched successfully"
    }
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Details for post ${id}`
    }
  });
};

const createPost = (req, res) => {
  res.status(201).json({
    success: true,
    data: {
      message: "Post created successfully"
    }
  });
};

const updatePost = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Post ${id} updated successfully`
    }
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Post ${id} deleted successfully`
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};