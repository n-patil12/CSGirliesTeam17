import React, { useEffect, useState, useRef } from 'react';
import ChatbotIcon from './ChatbotIcon';
import ChatBotForm from './ChatForm';
import ChatMessage from './ChatMessage';

const Chatbot = () => {
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
        .replace(/\*\*(.*?)\*\*/g, '$1') // remove markdown bold
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      console.error('Chatbot error:', error);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [ChatHistory]);

  return (
    <>
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
              <p className="message-text">
                Hey there!
                <br />
                How can I help you today?
              </p>
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
    </>
  );
};

export default Chatbot;
