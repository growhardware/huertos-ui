import React from 'react'
// import io from './App.js'

class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false,
      }
    }
    render() {
      return <h2>Your Dashboard:</h2>;
    }
  }

export default Dashboard;
  
