const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const blogController = require('../controllers/blogController')

router.post('/',  authMiddleware, blogController.createBlog);

router.get('/',  blogController.getAllBlogs);

router.get('/:id', authMiddleware,blogController.getOneBlog);

router.put('/:id',authMiddleware, blogController.updateBlog);

router.put('/:id/lock',authMiddleware, blogController.lockBlog);

module.exports = router;

