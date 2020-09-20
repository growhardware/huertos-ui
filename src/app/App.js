import React from 'react';
import './App.css';
// de GH api:
import Login from './Login.js'
import Dashboard from './Dashboard.js'

const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

var sailsIo = sailsIOClient(socketIOClient);
sailsIo.sails.url = 'http://192.168.1.47:1337';

class Personal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  } 
  login() {
    this.setState({isLoggedIn: true});
  }
  render() {
    return this.state.isLoggedIn ? <Dashboard/> : <Login api={sailsIo} onLogin={this.login}/>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>El nuevo Frontend de</h4>
        <h2>Huertos</h2>
        <h4>El sistema de IoT Open Source de GrowHardware</h4>
      </header>
      <footer className="App-footer">
        <Personal/>
      </footer>
    </div>
  );
}

export default App;
