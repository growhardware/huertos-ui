import React from 'react';
import SessionService from '../services/SessionService';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      password: '',
      repeatPassword: '',
      remember: false,
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleEmailChange(event) {
    this.setState({ emailAddress: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }
  handleRepeatPasswordChange(event) {
    this.setState({ repeatPassword: event.target.value })
  }
  handleRememberMeChange(event) {
    this.setState({ remember: event.target.value })
  }

  handleResponse(body, JWR) {
    if (body === 'OK') {
      console.log('Successfully signed in');
      this.setState({signingUp: false});
    } else {
      console.log('Error: ', JWR);
    }
  }
  handleSubmit(event) {
    const msg = {
      emailAddress: this.state.emailAddress,
      password: this.state.password,
      remember: this.state.remember,
    }
    SessionService.signup(this.props.api, msg, this.handleResponse);
    event.preventDefault()
  }
  handleClick(event) {
    this.setState({signingUp:true});
    event.preventDefault()
  }
  render() {
    const signingUp = this.state.signingUp;
    const badCombo = this.state.password !== this.state.repeatPassword; 
    if (signingUp) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Your email:
            <br />
            <input
              type="email"
              value={this.state.emailAddress}
              onChange={this.handleEmailChange}
            />
            <br />
            Your password:
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            Repeat your password:
            <br />
            <input
              type="password"
              value={this.state.repeatPassword}
              onChange={this.handleRepeatPasswordChange}
            />
            <br />
            Remember Me:
            <br />
            <input
              type="checkbox"
              value={this.state.remember}
              onChange={this.handleRememberMeChange}
            />
            <br />
          </label>
          <input type="submit" value="Submit" disabled={badCombo}/>
        </form>
      )
    } else {
      return (
        <div>
          <button onClick={this.handleClick}>Signup</button>
        </div>
      )
    }
  }
}

export default Signup;
