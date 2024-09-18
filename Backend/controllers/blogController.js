const Blog = require('../models/Blog');

  // create blog
async function createBlog(req, res) {
    const {title,content} = req.body;
    try {
    const blog = new Blog({ title, content, lastEditedBy :req.user.id ,isLocked : false });
  
      await blog.save();
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // get all blog
async function getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // find one blog
  async function getOneBlog(req, res) {
    try {
        const id  = req.params.id
      const blogs = await Blog.findById(id);
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Edit blog
  async function updateBlog(req, res) {
    const {title,content} = req.body;
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
  
      blog.title = title;
      blog.content = content;
      blog.lastEditedBy = req.user.id;
      blog.isLocked = false;
      blog.lockedBy = req.user.id;
      blog.lockedAt = new Date();
  
      await blog.save();
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Lock blog
  async function lockBlog(req, res) {

    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
  
      blog.isLocked = true;
      blog.lockedBy = req.user.id;
      blog.lockedAt = new Date();
  
      await blog.save();
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
module.exports = {createBlog,getAllBlogs,getOneBlog,updateBlog,lockBlog };
