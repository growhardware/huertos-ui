import React from 'react';
import LoginControl from './components/LoginControl';
import './App.css';

const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

var io = sailsIOClient(socketIOClient);
//io.sails.url = 'https://3.137.147.183:80'
//io.sails.url = 'http://3.137.147.183:80'
io.sails.url = 'http://ec2-18-188-86-138.us-east-2.compute.amazonaws.com:80';
//io.sails.url = 'https://3.137.147.183:443'
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
  );
}

export default App;
