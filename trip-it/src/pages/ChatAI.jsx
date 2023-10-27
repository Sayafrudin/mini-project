import React from "react";
import "../styles/chat-ai.css";
import avatar from "../assets/images/avatar.jpg";

export default function ChatAI() {
  return (
    <div className="chat__wrapper">
      <div className="chat__container ">
        <div className="chat__header">Chat AI</div>
        <div className="chat__messages">
          <div className="message user__message">
            <img
              className="avatar user__avatar"
              src={avatar}
              alt="Receiver Avatar"
            />
            <div className="message__text">Hi there!</div>
          </div>
          <div className="message">
            <div className="message__text">Hello!</div>
          </div>
        </div>
        <div className="input__container">
          <input type="text" placeholder="Tulis pesan..." />
          <button>Kirim</button>
        </div>
      </div>
    </div>
  );
}
