import React from 'react'
import Device from './Device.js'
import LedSwith from './LedSwith.js'

var devices = [
  {id:'x', kind:'ioTest', alias:'La Cuca', status:{led: false, pushButton: false},settings:{}},
  {id:'y', kind:'ioTest', alias:'Otra C', status:{led: false, pushButton: false},settings:{}},
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }
    /*
    renderDevices() {
      devices.map((i) => {
        <Device kind={i.kind} alias={i.alias} status={i.status}/>
      }

      <div>{this.renderDevices}</div>
    }*/
    render() {
      return (

        <div>
          <h2>Your Dashboard:</h2>
          <h4>Devices:</h4>
          {// <DevStatus api={this.props.api} id="5f3ee268e201f20f16a85397"></DevStatus>
          }<div> <LedSwith api={this.props.api} id="5f3ee268e201f20f16a85397"></LedSwith></div>          
        </div>
      );
    }
  }

export default Dashboard;
  
