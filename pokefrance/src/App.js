import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {getData} from "./services/api";

function App() {
  const [data, setData] = useState();

  useEffect(async () => {
    console.log('cc')
    const res = await getData();
    console.log(res)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
