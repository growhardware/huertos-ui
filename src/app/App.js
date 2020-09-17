import React from 'react';
import './App.css';
// de GH api:
const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

var io = sailsIOClient(socketIOClient);
io.sails.url = 'http://192.168.1.46:1337';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(event) {this.setState({emailAddress: event.target.value});}
  handlePasswordChange(event) {this.setState({password: event.target.value});}
  handleSubmit(event) {
    const loginReqOptions = {
      method: 'put',
      url: '/api/v1/entrance/login',
      data: {
          emailAddress: this.state.emailAddress,
          password: this.state.password,
      },
      headers: {
          //_csrf: 'USER CSRF TOKEN'
      }
    };
    io.socket.request(loginReqOptions, handleLoginRes);
    alert('Email was submitted: ' + this.state.emailAddress + ' And password: ' + this.state.password);
    // event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.emailAddress} onChange={this.handleEmailChange} />
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Submit" /> 
      </form>
    );
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
  render() {
    return (
      <div>
        <Login/>
      </div>
    );
  }
} 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>El nuevo Frontend de</h2>
        <h1>Huertos</h1>
        <h3>El sistema de IoT Open Source de GrowHardware</h3>
      </header>
      <footer className="App-footer">
        Tu dashboard:
        <Dashboard/>
      </footer>
    </div>
  );
}

function handleLoginRes(res) {
  console.log(res.body)
}

export default App;
