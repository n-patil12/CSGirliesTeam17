import './signInPage.css';
import { FiMusic, FiEdit3, FiCompass } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import fbimg from '../assets/facebook-img.png';
import youtubeimg from '../assets/youtube-img.png'
import linkedinimg from '../assets/linkedin-img.png';
import ChatbotIcon from './ChatbotIcon';
import ChatBotForm from './ChatForm';
import React, { useEffect, useState, useRef } from 'react';
import ChatMessage from './ChatMessage';

export default function SignInPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [ChatHistory, setChatHistory] = useState([]);

  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking'),
        { role: 'model', text },
      ]);
    };

    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history }),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error.message || 'Something went wrong!');
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [ChatHistory]);

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

          <h1 className="subtxt">or manually input your login info</h1>

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

      {/* Toggle Button */}
      <button id="chatbot-toggler" onClick={() => setIsChatOpen((prev) => !prev)}>
        <span className="material-symbols-rounded">
          {isChatOpen ? 'close' : 'mode_comment'}
        </span>
      </button>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="chatbot-popup">
          {/* Chat Header */}
          <div className="chat-header">
            <div className="header-info">
              <ChatbotIcon />
              <h2 className="chatbot-logo-txt">Chatbot</h2>
            </div>
          </div>

          {/* Chat Body */}
          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              <ChatbotIcon />
              <p className="message-text">Hey there!<br />How can I help you today?</p>
            </div>
            {ChatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Chat Footer */}
          <div className="chat-footer">
            <ChatBotForm
              ChatHistory={ChatHistory}
              setChatHistory={setChatHistory}
              generateBotResponse={generateBotResponse}
            />
          </div>
        </div>
      )}
    </div>
  );
}