import React, { useRef } from 'react';

const ChatBotForm = ({ChatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        
        //update chat history with the user message
        setChatHistory(history => [...history, {role: "user", text: userMessage }]);

        setTimeout(() => /*setChatHistory(history => [...history, {role: "model"}]),*/ generateBotResponse([...ChatHistory, {role: "user", text: userMessage }]),  600);
    }

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
            <button className="material-symbols-rounded">keyboard_arrow_up</button>
        </form>
    );
};

export default ChatBotForm