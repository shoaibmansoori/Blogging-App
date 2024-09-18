import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  function logout() {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login after logout
  }

  return (
    <header>
      {isAuthenticated && (
        <Link to="/blogs" className="logo">MyBlog</Link>
      )}
      <nav>
        {isAuthenticated ? (
          <>
            {/* <Link to="/create-blog">Create New Blog</Link> */}
            {/* Use a button instead of an anchor for logout */}
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            {/* Show login and register options when not authenticated */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
