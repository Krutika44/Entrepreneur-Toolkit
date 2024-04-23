import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Import CSS file for styling

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chats, setChats] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track chatbot visibility

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/chat', {
        user_input: userInput
      });
      const newChats = [...chats, { user: userInput, bot: data.response }];
      setChats(newChats);
      setUserInput(''); // Clear input after submission
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="chatbot-wrapper">
      <img src="chat.gif" alt="Chat Icon" className="chat-icon" onClick={toggleChat} />
      {isChatOpen && (
        <div className="chatbot-container">
          <button className="close-button" onClick={closeChat}>X</button> {/* Close button */}
          <div className="chatbot-chat">
            {chats.map((chat, index) => (
              <div key={index}>
                <div className="chatbot-user">{chat.user}</div>
                <div className="chatbot-response">{chat.bot}</div>
              </div>
            ))}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="chatbot-input"
              />
              <button type="submit" className="chatbot-button">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
