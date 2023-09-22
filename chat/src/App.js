import { useState } from "react";
import Message from "./components/Message/Message";
import MessageForm from "./components/MessageForm/MessageForm";

function App() {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <Message messageList={messageList} />
      <MessageForm messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
}

export default App;
