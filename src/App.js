import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyInfo() {
  return <div>
            <h1>Adam Rowe</h1>
            <p>I'm a mobile software engineer looking for work.</p>
            <ul title="Work Experience">
              <li>Le Tote - Lead iOS Engineer</li>
              <li>Sysomos - Lead Android Engineer</li>
              <li>Phoenix Software International - Java/Android Application Developer</li>
            </ul>
          </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyInfo />
        </p>
        <a
          className="App-link"
          href="https://github.com/airowe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
