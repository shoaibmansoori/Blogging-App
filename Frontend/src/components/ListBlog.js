import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Blog from './Blog';

export default function ListBlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
    //   const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="list-blogs-page">
      <h1>List of Blogs</h1>
      <Link to="/create-blog" className="create-blog-link">Create a New Blog</Link>
      <div className="blogs-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Blog key={blog._id} {...blog} /> // Spread blog properties to Blog component
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
}
