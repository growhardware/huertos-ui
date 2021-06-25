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
    const switchProp = this.props.document.status.switch;
    const led = this.props.document.status.led;
    return (
      <div className="Device">
        <label>
          <label>{this.props.document.alias}</label>
          <label>{' (' + this.props.document.kind + ')'}</label>
          <br />
          <br />
          status:
          <br />
          switch: 
          <label
            className={switchProp ? "digital-flag_on" : "digital-flag_off"}
            >{switchProp ? ' ON' : ' OFF'}
          </label>
          <br />
          led: 
          <label
            className={led ? "digital-flag_on" : "digital-flag_off"}
            >{led ? ' ON' : ' OFF'}
          </label>
        </label>
        <br />
        <Switch
          api={this.props.api}
          id={this.props.document.id}
          on={!this.props.document.status.led}
          name={'led'}
        />
      </div>
    )
  }
}

export default Device;
