/* eslint-disable no-unused-vars */
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import PublishBlogs from './pages/PublishBlogs';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/create' element={<PublishBlogs/>}/>
      <Route path='/blogs' element={<BlogsPage/>}/>
    </Routes>
    </>
  )
}

export default App
