import React from 'react';
import './App.css';
// de GH:
import Login from './Login.js'
import Dashboard from './Dashboard.js'

const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://192.168.1.47:1337';
io.sails.environment = 'development';


class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isLoggedIn: false
    };
  } 
  handleLogin() {
    console.log('Hubo login');
    this.setState({isLoggedIn: true});
  }
  handleLogout() {
    console.log('Hubo logout');
    this.setState({isLoggedIn: false});
  }
  render() {
    // return this.state.isLoggedIn ? <Dashboard/> : <Login api={sailsIo} onLogin={this.handleLogin}/>;
    //return sailsIo ? <Dashboard/> : <Login api={sailsIo} onLogin={this.handleLogin}/>;
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <Dashboard api={this.props.io} isLoggedIn={isLoggedIn}/>
        <br/>
        <Login api={this.props.io} isLoggedIn={isLoggedIn} onLogout={this.handleLogout} onLogin={this.handleLogin}/>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Huertos</h3>
        <h4>El sistema de IoT Open Source de GrowHardware</h4>
      </header>
      <div className="App-main">
        <LoginControl io={io}/>
      </div>
      <footer className="App-footer">
        Contact us:
      </footer>
    </div>
  );
}
//

export default App;
