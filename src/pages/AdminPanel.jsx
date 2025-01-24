import React from 'react'
import BlogForm from '../components/BlogForm/BlogForm'
import BlogList from '../components/BlogList/BlogList'
import BlogListDelete from '../components/BlogListDelete/BlogListDelete'

const AdminPanel = () => {
  return (
    <>
    <BlogForm />
    <BlogListDelete />
    </>
  )
}

export default AdminPanel