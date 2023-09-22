import React from "react";
import "./Message.sass";

export default function Message({ message }) {
  return (
    <div>
      <h3 className="message">{message}</h3>
    </div>
  );
}
