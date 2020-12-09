const express = require('express');

const blogController = require('../controllers/blogController');

const router = express.Router();

// [POST] : /api/v1/blog/post
router.post('/post', blogController.crateBlogPost);

module.exports = router;
