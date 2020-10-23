import React from 'react';
import './App.css';
import LoginControl from './components/LoginControl';

const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://localhost:1337';
io.sails.environment = 'development';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Huertos</h3>
        <h4>El sistema de IoT Open Source de GrowHardware</h4>
      </header>
      <div className="App-main">
        <LoginControl api={io} />
      </div>
      <footer className="App-footer">Contact us:</footer>
    </div>
  )
}

export default App;
