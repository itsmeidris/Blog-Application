const { upload } = require("../Middlewares/mutler");
const { cloudinary } = require("../Config/cloudinaryConfig");
require('dotenv').config();

//Create the blog (POST)
const createBlog = (Blog) => async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      upload.single('blogImage')(req, res, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const { title, description, author } = req.body;
    let blogImage;

    if (req.file) {
      // Upload the image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        upload_preset: process.env.UPLOAD_PRESET,
      });
      blogImage = result.secure_url;
    } else {
      blogImage = null;
    }

    const newBlog = new Blog({
      title,
      description,
      author,
      blogImage,
    });

    await newBlog.save();

    res.status(201).json({
      message: 'Blog created successfully',
      data: newBlog,
    });
  } catch (e) {
    console.log(`Error : ${e}`);
    res.status(500).json({
      message: 'Error creating blog',
      error: e.message,
    });
  }
};

module.exports = createBlog;

// Rest of the code remains the same

//Get all the blogs (GET)
const getAllBlogs = (Blog) => async (req ,res) =>{
    try{
        const blogs = await Blog.find();
        res.status(200).json({
            message : "Blogs fetched successfully",
            data : blogs
        });
    }catch(e){
        console.log(`Error : ${e}`);
    }
}

//Get the blog by its title
const getBlogByTitle = (Blog) => async (req ,res) =>{
    try{
        // Decode and normalize the title from the URL
        const blogTitle = decodeURIComponent(req.params.title).replace(/-/g, ' ');
        const blogByTitle = await Blog.findOne({ title : blogTitle });

        if(blogByTitle){
            res.status(200).json({
                message : "Blog fetched successfully",
                data : blogByTitle
            });
        }else{
            res.status(404).json({
                message : "Blog not found"
            });
        }
    }catch(e){
        console.log(`Error : ${e}`);
    }
}

//Update the blog by its title (PUT)
const updateBlog = (Blog) => async (req ,res) =>{
    try{
        const blogTitle = decodeURIComponent(req.params.title).replace(/-/g, ' ');
        const {title ,description ,auhtor} = req.body;

        const updatedBlog = await Blog.findOneAndUpdate(
            {title : blogTitle},
            {$set : {title ,description ,auhtor}},
            {new : true}
        );
        
        if(updatedBlog){
            res.status(200).json({
                message : "Blog updated successfully",
                data : updatedBlog
            });
        }else{
            res.status(404).json({
                message : "Blog not found"
            });
        }
    }catch(e){
        console.log(`Error : ${e}`);
    }
}

//Delete the blog by its title (DELETE)
const deleteBlog = (Blog) => async (req ,res) =>{
    try{
        const blogTitle = decodeURIComponent(req.params.title).replace(/-/g, ' ');
        const deletedBlog = await Blog.findOneAndDelete({title : blogTitle});

        if(deletedBlog){
            res.status(200).json({
                message : "Blog deleted successfully",
                data : deletedBlog 
            });
        }else{
            res.status(404).json({
                message : "Blog not found"
            });
        }

    }catch(e){
        console.log(`Error : ${e}`);
    }
}

//Exporting the api operations
module.exports = {createBlog ,getAllBlogs ,getBlogByTitle ,updateBlog ,deleteBlog};