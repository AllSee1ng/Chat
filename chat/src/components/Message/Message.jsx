import React from "react";
import "./Message.sass";

export default function Message({ messageList }) {
  return messageList.map((message) => (
    <div className="message">
      <span className="author">{message.author}: </span>
      <span className="author">{message.text}</span>
    </div>
  ));
}
