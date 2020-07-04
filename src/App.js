import React from 'react';
import logo from './logo.svg';
import './App.css';
const text = 'Some new words';
var digits = 100;
let moreText = 'That works!';
let moreTextStill = 'Still Works!'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style= {{
          color: 'red',
          fontSize: 12+24
        }}>
        Hello World </p>
        <p>  {text}, {digits}
        </p>
        <p> { digits>50 ? moreText : moreTextStill},
         {digits===100 && ' And also this '+ moreTextStill}
        </p>
        <p> {null}, {false}, {undefined}, {true}
        </p>
         import { count, length } from "./number";
          <p> And the result is {count * length} </p>
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
