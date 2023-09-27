import React from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

export default function ChatList() {
  const chatList = [
    {
      chatName: "Chat 1",
      id: "chat1",
    },
    {
      chatName: "Chat 2",
      id: "chat2",
    },
    {
      chatName: "Chat 3",
      id: "chat3",
    },
  ];
  return (
    <div className="chatListBox">
      Chat List
      <ul className="chatList">
        {chatList.map((chat) => (
          <Link key={uuid()} to={`/chat/${chat.id}`}>
            {chat.chatName}
          </Link>
        ))}
      </ul>
    </div>
  );
}
