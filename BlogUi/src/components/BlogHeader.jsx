/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

function BlogHeader() {
  return (
    <div className='flex justify-between items-center p-4 bg-myBlack text-myWhite font-dmSans'>
      <h1 className='text-3xl'>Blog App</h1>
      <div>
        <Link to="/" className='mx-2 cursor-pointer'>Home</Link>
        <Link to="/create" className='mx-2 cursor-pointer'>Publish</Link>
        <Link to="/blogs" className='mx-2 cursor-pointer'>Blogs</Link>
      </div>
    </div>
  )
}

export default BlogHeader
