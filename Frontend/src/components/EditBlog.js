import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditBlogPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`http://localhost:5000/api/blogs/${id}`, {
        headers: { Authorization: `${token}` },
      });
      setTitle(data.title);
      setContent(data.content);
    };
    fetchBlog();
  }, [id]);

  const handleEditBlog = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/blogs/${id}`, {
        title,
        content,
      }, {
        headers: { Authorization: `${token}` },
      });
      navigate('/blogs');
    } catch (err) {
      alert('Error editing blog');
    }
  };

  return (
    <form onSubmit={handleEditBlog}>
      <h1>Edit Blog</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}
