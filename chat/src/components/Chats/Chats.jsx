import React, { useState } from "react";
import ChatList from "../ChatList/ChatList";
import Message from "../Message/Message";
import MessageForm from "../MessageForm/MessageForm";
import { useParams } from "react-router-dom";

export default function Chats() {
  const { chatId } = useParams();

  const initialChats = {
    chat1: [],
    chat2: [],
    chat3: [],
  };
  const [messageList, setMessageList] = useState(initialChats);

  return (
    <div>
      <ChatList />
      <div className="chatArea">
        <Message messageList={messageList[chatId]} />
        <MessageForm
          messageList={messageList[chatId]}
          setMessageList={setMessageList}
        />
      </div>
    </div>
  );
}
