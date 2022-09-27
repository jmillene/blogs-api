const servicePost = require('../service/post.service');

const blog = async (req, res) => {
  try {
    const blogCreate = await servicePost.createBlog(req.body, req.user);
  if (blogCreate.type) return res.status(blogCreate.type).json({ message: blogCreate.message });
  return res.status(201).json(blogCreate);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'deu ruim',
    });
  }
};
const blosPost = async (req, res) => {
try {
  const blogs = await servicePost.getPost();
  return res.status(200).json(blogs);
} catch (error) {
  console.log(error);
  return res.status(500).json('deu ruim');
}
};
module.exports = {
  blog,
  blosPost,
};
