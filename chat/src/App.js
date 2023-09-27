import Home from "./components/Home/Home";
import Chats from "./components/Chats/Chats";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ChatList from "./components/ChatList/ChatList";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/chat">Chats</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/chat">
          <Route index element={<ChatList />} />
          <Route path=":chatId" element={<Chats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
