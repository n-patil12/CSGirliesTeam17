import './signInPage.css';
import { FiMusic, FiEdit3, FiCompass } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import fbimg from '../assets/facebook-img.png';
import youtubeimg from '../assets/youtube-img.png'
import linkedinimg from '../assets/linkedin-img.png';
import ChatbotIcon from './ChatbotIcon';

export default function signInPage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h2 className="logo">MoodTunes</h2>
      </header>
      
      <section className="hero">
        <div className="text-content">
          <h1 className="welcome-back-txt">Welcome Back!</h1>
          <h1 className="subtxt"> Log back into your account </h1>
          <div className="socials-div">
            <img className='social-img' src={youtubeimg}/>
            <img className='social-img' src={fbimg}/>
            <img className='social-img' src= {linkedinimg}/>
          </div>
          <h1 className="subtxt"> or manually input your login info </h1>
          <div className='inputs-div'>
            <input type= 'text' className="input-primary"></input>
            <input type= 'text' className="input-secondary"></input>
            <button className="sumbit-button" type="submit">login</button>
          </div>
        </div>
        
      </section>

      <section id= "side_panel">
        <h1 className="new-account">New to the account?</h1>
        <h1 className="subtxt-signup"> click to sign up! </h1>
        <button className="signup-button" type="submit">sign-up</button>
      </section>

      <div className="chatbot-popup">

        {/*Chat Header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="chatbot-logo-txt">Chatbot</h2>
            <button class="material-symbols-rounded">keyboard_arrow_down</button>
          </div>
          {/*Chat Body*/}
          <div className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">
                Hey there <br/> How can I help you today?
              </p>
            </div>

            <div className="message user-message">
              <p className="message-text">
                blah blah blah im the user
              </p>
            </div>
          </div>
        </div>

        {/*Chat Footer*/}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required/>
            <button class="material-symbols-rounded">keyboard_arrow_up</button>
          </form>
        </div>
      </div>

    </div>
  );
}
