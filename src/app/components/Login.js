import React from 'react';
import SessionService from '../services/SessionService';

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
      this.handleLoginResponse = this.handleLoginResponse.bind(this);
      this.handleLogoutResponse = this.handleLogoutResponse.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
    handleEmailChange(event) {this.setState({emailAddress: event.target.value});}
    
    handlePasswordChange(event) {this.setState({password: event.target.value});}

    handleLoginResponse(body, JWR) {
      if(body==='OK') {
        console.log('Successfully logged in', JWR);
        return this.props.onLogin();
      }
      else {console.log(body);}
    }
    handleLogoutResponse(body, JWR) {
      if(body==='OK') {
        console.log('Successfully logged out', JWR);
        return this.props.onLogout();
      }
      else {console.log(body);}
    }
    handleSubmit(event) {
      const credentials = {emailAddress: this.state.emailAddress, password: this.state.password};
      SessionService.login(this.props.api, credentials, this.handleLoginResponse);
      event.preventDefault();
    }
    handleLogout(event) {
      SessionService.logout(this.props.api, this.handleLogoutResponse);
      event.preventDefault();
    }
    render() {
      const isLoggedIn = this.props.isLoggedIn;
      if(isLoggedIn){
        return (
          <div>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        );
      }
      else{
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:<br/>
              <input type="email" value={this.state.emailAddress} onChange={this.handleEmailChange} /><br/>
              Password:<br/>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange} /><br/>
            </label>
            <input type="submit" value="Login" /> 
          </form>
        );
      }
    }
}

export default Login;