import './signInPage.css';
import { useNavigate } from 'react-router-dom';
import fbimg from '../assets/facebook-img.png';
import youtubeimg from '../assets/youtube-img.png';
import linkedinimg from '../assets/linkedin-img.png';
import ChatBot from './ChatBot';

export default function SignInPage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h2 className="logo">MoodTunes</h2>
      </header>

      <section className="hero">
        <div className="text-content">
          <h1 className="welcome-back-txt">Welcome Back!</h1>
          <h2 className="subtxt">Log back into your account</h2>

          {/* Social Icons */}
          <div className="socials-div">
            <img className="social-img" src={youtubeimg} alt="YouTube" />
            <img className="social-img" src={fbimg} alt="Facebook" />
            <img className="social-img" src={linkedinimg} alt="LinkedIn" />
          </div>

          <h2 className="subtxt" id="subtext2">or input your login info</h2>

          {/* Input Form with Labels */}
          <form className="inputs-div">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="input-primary"
              placeholder="Enter your email"
              name="email"
              autoComplete="email"
              required
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
            />

            <button className="sumbit-button" type="submit">Login</button>
          </form>
        </div>
      </section>

      <section id="side_panel"></section>
      <ChatBot />
    </div>
  );
}
