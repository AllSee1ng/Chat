import { useState } from "react";
import Message from "./components/Message/Message";
import MessageForm from "./components/MessageForm/MessageForm";

function App() {
  const [messageList, setMessageList] = useState([]);
  const chatList = [
    {
      chatName: "Chat 1",
      id: "Chat 1",
    },
    {
      chatName: "Chat 2",
      id: "Chat 2",
    },
    {
      chatName: "Chat 3",
      id: "Chat 3",
    },
  ];

  return (
    <div className="App">
      <div className="chatListBox">
        Chat List
        <ul className="chatList">
          {chatList.map((item) => {
            return (
              <li key={item.id} className="chatListEl">
                {item.chatName}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="chatArea">
        <Message messageList={messageList} />
        <MessageForm
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </div>
    </div>
  );
}

export default App;
