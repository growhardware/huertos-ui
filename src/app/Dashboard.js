import React from 'react'
import Device from './Device.js'

var Devices = [
  {id:'5f3e9f3571afb3264ecd8dbe', kind:'ioTest', alias:'La Cuca', status:{led: false, pushButton: false},settings:{}},
  {id:'y', kind:'ioTest', alias:'Otra C', status:{led: false, pushButton: false},settings:{}},
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    //this.renderDevices = this.renderDevices.bind(this);
    this.state = {
      isLoggedIn: false,
      devices: Devices,
    }
  }
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    const device = Devices[0];
    if(isLoggedIn){
      return (
        <div>
          <h2>Your Dashboard:</h2>
          <h4>Devices:</h4>
          <div><Device api={this.props.api} document={device}></Device></div>          
        </div>
      );
    }
    else{
      return <h4>Login to access your dashboard.</h4>
    }
  }
}

export default Dashboard;
  
