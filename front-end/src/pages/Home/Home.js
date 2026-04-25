import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { translate } from "../../utils/translate";
import image from "../../assets/images/profile.png";
import "./Home.css";
import useLanguage from "../../hooks/useLanguage";

function Home() {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");
  };

  return (
    <div className="home-container">
      <NavBar selectedButton="home" />
      
      <main className="hero-section">
        {/* Picture is on the background */}
        <div className="profile-background-wrapper">
          <img src={image} alt="Berkay Öner" className="full-height-profile-bg" />
        </div>

        {/* Content Layer - Sitting on the Image */}
        <div className="overlay-content">
          <header className="greeting-header">
            <div className="title-wrapper">
              <h1 className="hero-title">{translate(lang, "home.title")}</h1>
            </div>
            <p className="hero-subtitle">
              {translate(lang, "home.description")}
            </p>
          </header>

          <div className="chat-container">
            <div className="chat-messages">
              {messages.length === 0 && (
                <p className="chat-placeholder">{translate(lang, "home.chatPlaceholder")}</p>
              )}
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            
            <div className="chat-input-area">
              <input 
                type="text" 
                placeholder={translate(lang, "home.messagePlaceholder")}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="send-btn">{translate(lang, "home.sendButton")}</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;