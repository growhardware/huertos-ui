import React from 'react'
import Device from './Device.js'
import CreateDevice from './CreateDevice'
var _ = require('underscore')

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.getDevices = this.getDevices.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.handleSocket = this.handleSocket.bind(this)
    this.state = {
      isLoggedIn: false,
      devices: [],
    }
  }
  handleSocket(msg) {
    console.log('Sails was sent a message: ', msg)
    var devices = _.toArray(this.state.devices)
    const index = _.findIndex(devices, { id: msg.id })
    console.log(index);
    console.log(devices[index]);
    
    if (msg.data.status !== undefined) {
      let dev = devices[index]
      console.log(dev)
      dev['status'] = msg.data.status
      /* A RESOLVER:
       Si descomentamos lo siguiente explota el front al gatillar handleSocket()
       La prop history del device actualizado es undefined
       No se de que lado es el problema aun.
       API: no popula la historia en la suscripcion. 
       UI: no estamos leyendo bien el objeto entrante.
      */

      // dev['history'] = msg.data.history
      console.log(dev)
      devices[index] = dev
    }
    
    this.setState({ devices: devices })
  }
  getDevices() {
    this.props.api.socket.get('/device/get', this.handleResponse)
  }
  handleResponse(msg) {
    console.log(msg)
    this.setState({ devices: msg })
  }
  componentDidMount() {
    this.props.api.socket.on('device', this.handleSocket)
    this.getDevices()
  }
  render() {
    const devices = this.state.devices
    const renderDevices = devices.map((dev) => (
      <section key={dev.id}>
        <Device
          api={this.props.api}
          document={dev}
          onCreated={this.getDevices}
        />
      </section>
    ))
    return (
      <div>
        <h2>Your Dashboard:</h2>
        <h4>Devices:</h4>
        <div className="Devices">
          {devices.length > 0 ? (
            <span>{renderDevices}</span>
          ) : (
            <p>No devices</p>
          )}
        </div>
        <CreateDevice api={this.props.api} onCreated={this.getDevices} />
      </div>
    )
  }
}

export default Dashboard
