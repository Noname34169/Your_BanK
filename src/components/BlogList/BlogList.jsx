import React, { useEffect, useState } from 'react'
import './BlogList.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BlogList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {

    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/blogs")
      setPosts(response.data)
    }

    fetchPosts()
  }, [])

  return (
    <section className="postlist">
      <div className="container">
        
        <div className="postlist__heading">
          <Link to={'/admin'} className="lime-text postlist-a">Press Releases</Link>
          <p className='postlist-p'>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
        </div>

      
        <div className="bloglist__wrapper">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bloglist__card"
            >
             
              <img
                src={post.image}
                alt=''
                className="bloglist__image"
              />

         
              <h2 >{post.name}</h2>

      
              <div className="bloglist__box">
                <b>{post.location}</b>
                <b>{post.date}</b>
              </div>

            
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
