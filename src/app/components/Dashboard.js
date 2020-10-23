import React from 'react'
import Device from './Device.js'
var _ = require('underscore')

const Devices = [
  {
    id: '5f3e9f3571afb3264ecd8dbe',
    kind: 'ioTest',
    alias: 'La Cuca',
    status: { led: false, pushButton: false },
    settings: {},
  },
  {
    id: 'y',
    kind: 'ioTest',
    alias: 'Otra C',
    status: { led: false, pushButton: false },
    settings: {},
  },
]

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
            <Device api={this.props.api} document={device} />
          ) : (
            <p>no devices</p>
          )}
        </div>
      </div>
    )
  }
}

export default Dashboard
