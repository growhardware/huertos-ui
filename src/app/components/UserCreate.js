import React from 'react'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddress: '',
      password: '',
      remember: false,
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleEmailChange(event) {
    this.setState({ emailAddress: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleRememberMeChange(event) {
    this.setState({ remember: event.target.value })
  }

  handleResponse(body, JWR) {
    /*
      console.log('Sails responded with: ', body);
      console.log('with headers: ', JWR.headers);
      console.log('and with status code: ', JWR.statusCode);
      */

    if (body === 'OK') {
      console.log('Successfully user created', JWR)
      //return this.props.onLogin()
    } else {
      console.log(body)
    }
  }
  handleSubmit(event) {
    const loginReqOptions = {
      method: 'post',
      url: '/api/v1/entrance/signup',
      data: {
        emailAddress: this.state.emailAddress,
        password: this.state.password,
        rememberMe: this.state.remember,
        fullName: 'fullname',
      },
      headers: {
        //_csrf: 'USER CSRF TOKEN'
      },
    }
    console.log(loginReqOptions)
    this.props.api.socket.request(loginReqOptions, this.handleResponse)
    event.preventDefault()
  }
  handleLogout(event) {
    const logoutReqOptions = {
      method: 'get',
      url: '/api/v1/account/logout',
      headers: {
        //_csrf: 'USER CSRF TOKEN'
      },
    }
    this.props.api.socket.request(logoutReqOptions, (b) => {
      if (b === 'OK') {
        console.log('Successfully logged out')
        return this.props.onLogout()
      } else {
        console.log(b)
      }
    })
    event.preventDefault()
  }
  render() {
    const isLoggedIn = this.props.isLoggedIn
    if (isLoggedIn) {
      return (
        <div>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <br />
            <input
              type="email"
              value={this.state.emailAddress}
              onChange={this.handleEmailChange}
            />
            <br />
            Password:
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
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
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
}

export default UserCreate
