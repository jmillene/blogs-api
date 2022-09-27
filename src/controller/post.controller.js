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
const blogPk = async (req, res) => {
  const { id } = req.params;
  try {
    const blogsPk = await servicePost.blogPk(id);
    if (blogsPk.type) return res.status(blogsPk.type).json({ message: blogsPk.message });
    return res.status(200).json(blogsPk);
  } catch (error) {
    console.log(error);
    return res.status(500).json('o que deu?');
  }
};
module.exports = {
  blog,
  blosPost,
  blogPk,
};
