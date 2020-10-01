import React from 'react';
import './App.css';
// de GH:
import Login from './Login.js'
import Dashboard from './Dashboard.js'

const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://192.168.1.43:1337';
io.sails.environment = 'development';


class Personal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.renderLogin = this.renderLogin.bind(this);
  } 
  handleLogin() {
    console.log('Hubo login');
    this.setState({isLoggedIn: true});
  }
  renderLogin() {
    if(this.state.isLoggedIn){
      return <h3>Ahora logout!</h3>
    }
    else{
      return <Login api={this.props.io} onLogin={this.handleLogin()}/>
    }
  }
  render() {
    // return this.state.isLoggedIn ? <Dashboard/> : <Login api={sailsIo} onLogin={this.handleLogin}/>;
    //return sailsIo ? <Dashboard/> : <Login api={sailsIo} onLogin={this.handleLogin}/>;
    return (
      <div>
      <Dashboard api={this.props.io}/>
      <br/>
      <div>
        <this.renderLogin></this.renderLogin>
      </div>
      
      </div>
    );
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
      <div>
        <Personal io={io}/>
      </div>
      <footer className="App-footer">
        Contact us:
      </footer>
    </div>
  );
}

export default App;
