import React from 'react'
import Switch from './Switch.js'
import '../App.css'

class Device extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {},
    }
  }
  render() {
    return (
      <div className="Device">
        <label>
          <label>{this.props.document.alias}</label>
          <label>{' (' + this.props.document.kind + ')'}</label>
          <br />
          <br />
          status:
          <br />
          pushButton:{' '}
          <label>{this.props.document.status.pushButton ? 'ON' : 'OFF'}</label>
          <br />
          led: <label>{this.props.document.status.led ? 'ON' : 'OFF'}</label>
        </label>
        <br />
        <Switch
          api={this.props.api}
          id={this.props.document.id}
          on={this.props.document.status.led}
          name={'led'}
        />
      </div>
    )
  }
}

export default Device;
