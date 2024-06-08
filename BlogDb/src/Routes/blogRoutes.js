const express = require('express');
const Blog = require('../Models/blogModel');
const { createBlog, getAllBlogs ,getBlogByTitle, updateBlog, deleteBlog} = require('../Controllers/blogController');

const blogRouter = express.Router();

//Working with the API operations
blogRouter.post('/create' , createBlog(Blog));
blogRouter.get('/' ,getAllBlogs(Blog));
blogRouter.get('/:title' ,getBlogByTitle(Blog));
blogRouter.put('/:title', updateBlog(Blog));
blogRouter.delete('/:title' ,deleteBlog(Blog));

module.exports = blogRouter;