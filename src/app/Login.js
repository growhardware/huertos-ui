import React from 'react';

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
      this.props.api.socket.request(loginReqOptions, handleLoginRes);
      alert('Email was submitted: ' + this.state.emailAddress + ' And password: ' + this.state.password);
      // event.preventDefault();
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:<br/>
            <input type="email" value={this.state.emailAddress} onChange={this.handleEmailChange} /><br/>
            Password:<br/>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} /><br/>
          </label>
          <input type="submit" value="Submit" /> 
        </form>
      );
    }
}

function handleLoginRes(res) {
  console.log(res);
  if(res==='OK'){
    console.log('SUPER_OKEY')
  }
}

export default Login;