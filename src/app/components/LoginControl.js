import React from 'react'
import Login from './Login.js'
import Signup from './Signup.js'
import Dashboard from './Dashboard.js'

class LoginControl extends React.Component {
    constructor(props) {
      super(props)
      this.handleLogout = this.handleLogout.bind(this)
      this.handleLogin = this.handleLogin.bind(this)
      this.state = {
        isLoggedIn: props.api.socket.sId,
      }
    }
    handleLogin() {
      this.setState({ isLoggedIn: true })
    }
    handleLogout() {
      this.setState({ isLoggedIn: false })
    }
    render() {
      const isLoggedIn = this.state.isLoggedIn
      return (
        <div>
          {isLoggedIn ? 
            <Dashboard api={this.props.api} />
          : <div>
            <h4>Login to access your dashboard.</h4>
            <Signup api={this.props.api}/>
          </div>}
          <br />
          <Login
            api={this.props.api}
            isLoggedIn={isLoggedIn}
            onLogout={this.handleLogout}
            onLogin={this.handleLogin}
          />
        </div>
      )
    }
  }

  export default LoginControl;

  /*<UserCreate
          api={this.props.api}
          isLoggedIn={isLoggedIn}
          onLogout={this.handleLogout}
          onLogin={this.handleLogin}
        />
        */