import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import AddNewBlog from '../../pages/AddNewBlog'
import EditBlog from '../../pages/EditBlog'
import SingleBlogPage from '../../pages/SingleBlogPage'
import Login from '../../pages/Login'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/add_new" element={<AddNewBlog />} />
        <Route path="/edit_existing_blog/:id" element={<EditBlog />} />
        <Route path="/single_blog/:id" element={<SingleBlogPage />} />
        <Route path="/blog/login" element={<Login />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}
