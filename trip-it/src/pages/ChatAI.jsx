import React, { useState } from "react";
import OpenAI from "openai";
import "../styles/chat-ai.css";
import avatar from "../assets/images/avatar.jpg";

export default function ChatAI() {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const AICLick = async () => {
    setLoading(true);
    try {
      const resp = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        temperature: 0.3,
        max_tokens: 256,
      });
      setResult(resp.choices[0].text);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

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
            <div className="message__text">{prompt}</div>
          </div>
          <div className="message">
            <div className="message__text">
              <p>{loading ? "......" : ""}</p>
              {result}
            </div>
          </div>
        </div>
        <div className="input__container">
          <textarea
            type="text"
            rows={3}
            placeholder="Tulis pesan..."
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" onClick={AICLick}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
