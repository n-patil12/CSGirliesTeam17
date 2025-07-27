import './authPages.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import fbimg from '../assets/facebook-img.png';
import youtubeimg from '../assets/youtube-img.png';
import linkedinimg from '../assets/linkedin-img.png';
import ChatBot from './ChatBot';
import axios from 'axios';
import { useState } from 'react';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Registering user:", { name, username, email, password });

      const res = await axios.post('http://localhost:3001/auth/register', { name, username, email, password });

      if (res.status === 200) {
        navigate('/home');
      } else {
        console.error("Error logging in user:", res.data);
        navigate('/');
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <img
          src={logo}
          alt="Logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </header>

      <div className="content-wrap">
        <section className="hero">
          <div className="text-content">
            <h1 className="welcome-back-txt">Welcome!</h1>
            <h2 className="subtxt">Create a new account</h2>

            <div className="socials-div">
              <img className="social-img" src={youtubeimg} alt="YouTube" />
              <img className="social-img" src={fbimg} alt="Facebook" />
              <img className="social-img" src={linkedinimg} alt="LinkedIn" />
            </div>

            <h2 className="subtxt" id="subtext2" style={{ marginTop: '-1rem' }}>or put in your info</h2>

            <form className="inputs-div" style={{ marginTop: '4rem' }} onSubmit={handleSubmit}>
              <label htmlFor="name" className="input-label">Name</label>
              <input
                type="text"
                id="name"
                className="input-primary"
                placeholder="Enter your name"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
               <label htmlFor="username" className="input-label">Username</label>
              <input
                type="text"
                id="username"
                className="input-primary"
                placeholder="Enter your username"
                name="username"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                id="email"
                className="input-primary"
                placeholder="Enter your email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password" className="input-label">Password</label>
              <input
                type="password"
                id="password"
                className="input-secondary"
                placeholder="Enter your password"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="sumbit-button" type="submit">Sign Up</button>
            </form>
          </div>
          {/* <p style={{ marginTop: '5rem', textAlign: 'center' }}> Already have an account? <span style={{ color: '#C7E5BC', cursor: 'pointer' }} onClick={() => navigate('/signin')}>Log in</span></p> */}
        </section>
        

        <section id="side_panel"></section>
      </div>
      <ChatBot />
    </div>
  );
}
