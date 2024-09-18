import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/blogs', {
        title,
        content,
      }, {
        headers: { Authorization: `${token}` },
      });
      navigate('/blogs');
    } catch (err) {
      alert('Error creating blog');
    }
  };

  return (
    <form onSubmit={handleCreateBlog}>
      <h1>Create Blog</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="styled-textarea" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}
