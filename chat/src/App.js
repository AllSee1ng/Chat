import Message from "./components/Message/Message";

const text = "Hello World";

function App() {
  return (
    <div className="App">
      <Message message={text} />
    </div>
  );
}

export default App;
