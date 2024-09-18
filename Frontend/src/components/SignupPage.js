import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      alert('Signup successful');
      localStorage.setItem('token', data.token);
      navigate('/blogs');
      window.location.reload(); 

    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <form className="register" onSubmit={handleSignup}>
      <h1>Signup</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Signup</button>
    </form>
  );
}
