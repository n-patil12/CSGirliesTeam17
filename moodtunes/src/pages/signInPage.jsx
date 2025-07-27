import './authPages.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import fbimg from '../assets/facebook-img.png';
import youtubeimg from '../assets/youtube-img.png';
import instaimg from '../assets/insta-img.png';
import googleimg from '../assets/google-img.png';
import ChatBot from './ChatBot';
import axios from 'axios';
import { useState } from 'react';
import { useUser } from '../context/userContext';

export default function SignInPage() {
  const navigate = useNavigate();
  const { setUserId } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Logging in user:", { email, password });

      const res = await axios.post('http://localhost:3001/auth/login', { email, password });

      if (res.status === 200) {
        console.log("User logged in successfully:", res.data.user.id);
        setUserId(res.data.user.id);
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
            <h1 className="welcome-back-txt">Welcome Back!</h1>
            <h2 className="subtxt">Log back into your account</h2>

            <div className="socials-div">
              <img className="social-img" src={youtubeimg} alt="YouTube" />
              <img className="social-img" src={fbimg} alt="Facebook" />
              <img className="social-img" src={instaimg} alt="Instagram" />
              <img className="social-img" src={googleimg} alt="Google" />
            </div>

            <h2 className="subtxt" id="subtext2">Or input your login info</h2>

            <form className="inputs-div" id="signindiv" onSubmit={handleSubmit}>
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

              <button className="sumbit-button" type="submit">Login</button>
              <div className="signuplink">
                <p>Or you're new to the account! <br></br> No worries, just <a className= "navigate-link" onClick={() => navigate('/signup')}> sign up here!</a></p>
              </div>
            </form>
          </div>
          {/* <p style={{ marginTop: '0.5rem', textAlign: 'center' }}> Don't have an account? <span style={{ color: '#C7E5BC', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Register</span></p> */}
        </section>

        <section id="side_panel"></section>
      </div>
      <ChatBot />
      
    </div>
  );
}
