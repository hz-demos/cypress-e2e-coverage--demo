import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { add, sub } from "./utils";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
        <input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
        <button onClick={() => setResult(add(a, b))}>Add</button>
        <button onClick={() => setResult(sub(a, b))}>Sub</button>
      </section>
      <section>Result: {result}</section>
    </div>
  );
}

export default App;
