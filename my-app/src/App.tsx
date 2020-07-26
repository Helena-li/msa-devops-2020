import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>MSA 2020 - This is develop branch.</p>
        <a
          className="App-link"
          href="https://msa.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MSA try it out
        </a>
      </header>
    </div>
  );
}

export default App;
