




import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Blog({ _id, title, content, isLocked }) {
  const [locked, setLocked] = useState(isLocked);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');  // Assuming you store the user ID in localStorage
  const token = localStorage.getItem('token');    // Get token for authorization

  // Function to lock the blog when user clicks "Edit"
  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/blogs/${_id}/lock`, 
        { userId }, 
        {
          headers: { Authorization: `${token}` }
        }
      );
      if (response.status === 200) {
        setLocked(true);  // Set blog as locked
        navigate(`/edit-blog/${_id}`);  // Redirect to the edit page
      }
    } catch (error) {
      console.error("Error locking the blog:", error);
      alert("Unable to lock the blog for editing.");
    }
  };

  return (
    <div className="blog">
      <div className="texts">
          <h2>{title}</h2>
        <p className="summary">{content.slice(0, 100)}...</p>

        {/* Show "Locked" text if blog is locked, otherwise show the "Edit" button */}
        {locked ? (
          <p style={{ color: "red" }}>Locked</p>
        ) : (
          <button onClick={handleEdit} className="edit-button">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
