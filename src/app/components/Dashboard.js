import React from 'react'
import Device from './Device.js'
import CreateDevice from './CreateDevice'
var _ = require('underscore')

var Devices = []

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.getDevices = this.getDevices.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.handleSocket = this.handleSocket.bind(this)
    this.state = {
      isLoggedIn: false,
      devices: Devices,
    }
  }
  handleSocket(msg) {
    console.log('Sails was sent a message: ', msg)
    let devices = this.state.devices
    const index = _.findIndex(devices, { id: msg.id })
    if (msg.data.status !== undefined) {
      let dev = devices[index]
      dev.status = msg.data.status
      devices[index] = dev
      this.setState({ devices: devices })
    }
  }
  getDevices() {
    this.props.api.socket.get('/device/get-my-devices', this.handleResponse)
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
    const device = this.state.devices[0]
    return (
      <div>
        <h2>Your Dashboard:</h2>
        <h4>Devices:</h4>
        <div>
          {device ? (
            <div>
              <Device api={this.props.api} document={device} />
            </div>
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
