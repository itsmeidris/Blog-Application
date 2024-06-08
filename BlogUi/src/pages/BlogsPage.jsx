/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import BlogHeader from '../components/BlogHeader'
import fetchData from '../utils/api';

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() =>{
    const fetchBlogs = async() =>{
      try{
        const data = await fetchData();
        setBlogs(data.data);
  
      }catch(e){
        console.log(e);
      }
    }
    fetchBlogs();
  } ,[]);

  return (
    <>
    <BlogHeader/>
    <div className='font-dmSans p-2 m-3'>
        <h1 className='text-[5vw] '>Browse through blogs</h1>
        <div className='flex flex-wrap '>
          {
            blogs.map((blog ,i) =>{
              return(
                <div key={i} className='border-2 border-myBlack rounded-md p-2 m-3 bg-myBlack text-myWhite w-[40vw]'>
                  <h1 className='text-3xl my-2'>{blog.title}</h1>
                  <p className='bg-myWhite text-myBlack rounded-md p-3 my-2'>{blog.description}</p>
                  <p className='my-2'>By : <span className='border-b-2'>{blog.author}</span></p>
                </div>
              )
            }) 
          }
        </div>
    </div>
    </>
  )
}

export default BlogsPage
