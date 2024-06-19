/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import BlogHeader from '../components/BlogHeader'
import postData from '../utils/Api/postBlogs';

function PublishBlogs() {
  const [title ,setTitle] = useState('');
  const [description ,setDescription] = useState('');
  const [author ,setAuthor] = useState('');
  const [blogImage ,setBlogImage] = useState(null);

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }
  const handleDescriptionChange = (e) =>{
    setDescription(e.target.value);
  }
  const handleAuthorChange = (e) =>{
    setAuthor(e.target.value);
  }
  const handleImageChange = (e) =>{
    setBlogImage(e.target.files[0]);
  }
    
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    try{
      const newBlog = await postData(title ,description ,author ,blogImage);
      if(newBlog){
        console.log(title ,description ,author ,blogImage);
        setTitle('');
        setDescription('');
        setAuthor('');
        setBlogImage(null);
      }
    }catch(e){
      console.log(e);
      throw e;
    }
  }

  return (
    <>
    <BlogHeader/>
    <div className='font-dmSans p-2 m-3'>
      <h1 className='text-[5vw]'>Publish a new blog</h1>
      <div>
        <form method="post" onSubmit={handleSubmit} className='bg-myBlack flex flex-col text-myWhite w-3/4 h-auto rounded-lg'>
          <div className='m-2 p-2'>
            <label>
            Title : <br/>
            <input 
            type="text" 
            placeholder='eg : How to change habits ?'
            value={title} 
            onChange={handleTitleChange}
            className='border-2 border-myBlack text-myBlack bg-myWhite rounded-md w-[30vw] h-8 placeholder:p-1 focus-within:p-1 p-1 '/>
            </label>
          </div>

          <div className='m-2 p-2'>
            <label>
            Description : <br/>
            <textarea 
            type="text" 
            placeholder='eg : lorem impsum talk speak whatever lorem impsum speak whatever'
            value={description} 
            onChange={handleDescriptionChange}
            className='border-2 border-myBlack text-myBlack bg-myWhite rounded-md w-[30vw] h-[150px] placeholder:p-1 focus-within:p-1 p-1'/>
            </label>
          </div>

          <div className='m-2 p-2'>
            <label>
            Author : <br/>
            <input 
            type="text" 
            placeholder='eg : James Clear'
            value={author} 
            onChange={handleAuthorChange}
            className='border-2 border-myBlack text-myBlack bg-myWhite rounded-md w-[30vw] h-8 placeholder:p-1 focus-within:p-1 p-1'/>
            </label>
          </div>

          <div className='m-2 p-2'>
            <label>
            Choose an image : <br/>
            <input 
            type="file" 
            onChange={handleImageChange}
            className='border-2 border-myBlack text-myBlack bg-myWhite rounded-md w-[30vw] p-1'/>
            </label>
          </div>

          <div className='m-2 p-2'>
            <button 
            type="submit"
            className='border-2 border-myWhite w-fit p-2 rounded-md mt-4 bg-myWhite text-myBlack font-semibold transition-all duration-[.4s] hover:bg-myBlack hover:text-myWhite'>
              Publish the blog
            </button>
          </div>
        </form>
      </div>     
    </div>
    </>
  )
}

export default PublishBlogs
