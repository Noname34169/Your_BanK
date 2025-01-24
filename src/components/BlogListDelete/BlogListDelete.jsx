import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const BlogListDelete = () => {
      const [postId, setPostId] = useState('');
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [image, setImage] = useState('');
      const [location, setLocation] = useState('');
      const [date, setDate] = useState('');
    const [posts, setPosts] = useState([])

      const updatePost = async (e) => {
        e.preventDefault();
        const updatedPost = { name, description, image, location, date };
        await axios.put(`http://localhost:5000/blogs/${postId}`, updatedPost);
        alert('Post updated successfully!');
      };

    
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

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
  
          <div className="bloglist__wrapper">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bloglist__card"
              >
                {/* Изображение с анимацией */}
                <img
                  src={post.image}
                  alt={post.name}
                  className="bloglist__image"
                />
  
                {/* Заголовок с анимацией появления */}
                <h2 >{post.name}</h2>
  
                {/* Бокс с метками с анимацией */}
                <div className="bloglist__box">
                  <b>{post.location}</b>
                  <b>{post.date}</b>
                </div>
  
                {/* Описание с анимацией */}
                <p>{post.description}</p>


                <div className="bloglist__box blog-box__active">
                  <b onClick={() => deleteProduct(post.id)}>Delete</b>
                  <b onClick={() => updatePost(post.id)}>Update</b>
                </div>
                

              </div>


            ))}

          </div>
        </div>
      </section>
    )
}

export default BlogListDelete