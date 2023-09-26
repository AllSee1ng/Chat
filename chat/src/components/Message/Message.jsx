import React from "react";
import "./Message.sass";
import uuid from "react-uuid";

export default function Message({ messageList }) {
  return messageList.map((message) => (
    <div key={uuid()} className="message">
      <span className="author">{message.author}: </span>
      <span className="author">{message.text}</span>
    </div>
  ));
}
