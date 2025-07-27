import './signInPage.css';
import { FiMusic, FiEdit3, FiCompass } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import fbimg from '../assets/facebook-img.png';
import youtubeimg from '../assets/youtube-img.png'
import linkedinimg from '../assets/linkedin-img.png';
import ChatBot from './ChatBot';

export default function SignInPage() {

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h2 className="logo">MoodTunes</h2>
      </header>

      <section className="hero">
        <div className="text-content">
          <h1 className="welcome-back-txt">Welcome Back!</h1>
          <h1 className="subtxt">Log back into your account</h1>

          <div className="socials-div">
            <img className="social-img" src={youtubeimg} alt="YouTube" />
            <img className="social-img" src={fbimg} alt="Facebook" />
            <img className="social-img" src={linkedinimg} alt="LinkedIn" />
          </div>

          <h1 className="subtxt">or input your login info</h1>

          <div className="inputs-div">
            <input type="text" className="input-primary" placeholder="Email" />
            <input type="password" className="input-secondary" placeholder="Password" />
            <button className="sumbit-button" type="submit">Login</button>
          </div>
        </div>
      </section>

      <section id="side_panel">
        <h1 className="new-account">New to the account?</h1>
        <h1 className="subtxt-signup">Click to sign up!</h1>
        <button className="signup-button" type="submit">Sign Up</button>
      </section>
      <ChatBot />
      </div>
  );
}