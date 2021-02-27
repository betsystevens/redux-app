import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import HelloWorld from "./components/HelloWorld";

function App() {
  const [tech] = useState("Redux");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld tech={tech} />
      </header>
    </div>
  );
}

export default App;
