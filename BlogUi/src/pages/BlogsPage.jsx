/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import BlogHeader from '../components/BlogHeader'
import fetchData from '../utils/Api/fetchBlogs';
import BlogTemplate from '../components/BlogTemplate';
import styled from 'styled-components';
import Loader from '../components/Loader';

function BlogsPage() {
  // Declare state variables to store the blog data and loading status
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the blog data when the component mounts
  useEffect(() =>{
    const fetchBlogs = async() =>{
      try{
        // Simulate a 2-second delay to show the loading state
        await new Promise((resolve) => setTimeout(resolve ,2000));

        // Fetch the blog data from the API
        const data = await fetchData();
        // Update the blogs state with the fetched data
        setBlogs(data.data);
        // Set the loading state to false
        setIsLoading(false);
  
      }catch(e){
        // Log any errors and set the loading state to false
        console.log(e);
        setIsLoading(false);
      }
    }
    fetchBlogs();
  } ,[]);

  return (
    <>
    {/* Render the blog header component */}
    <BlogHeader/>
    <div className='font-dmSans p-2 m-3'>
        <h1 className='text-[5vw] '>Browse through blogs</h1>
        {
          // Conditional rendering based on the loading state
          isLoading ? (
            // If loading, show the spinner loader and a message
            <Loader message = 'Getting blogs...'/>
          ) :
          // If not loading, check if there are any blogs
          blogs.length > 0 ? (
          // If there are blogs, render them using the BlogTemplate component
          <div className='flex flex-wrap'>
            {
            blogs.map((blog ,i) =>{
              return(
                <BlogTemplate 
                key = {i}
                title = {blog.title}
                description = {blog.description}
                author = {blog.author}
                blogImage = {blog.blogImage}/>
              )
            }) 
          }
          </div>
          ) : (
            // If there are no blogs, show a "No Blogs Found" message
            <DataContainer>
              <h1 className='text-center text-[3vw]'>No Blogs Found</h1>
            </DataContainer>
          )
        }
    </div>
    </>
  )
}

export default BlogsPage

// "No Blogs Found" container styles
const DataContainer = styled.div`
  position:absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;