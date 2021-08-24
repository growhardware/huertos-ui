import React from 'react'
import HistoryChart from './HistoryChart.js'
import Switch from './Switch.js'
import '../App.css'

class Device extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: {},
      history: {}
    }
  }
  render() {
    const switchProp = this.props.document.status.switch
    const led = this.props.document.status.led
    const history = this.props.document.history
    const switchHistory = history.filter( r => r.status.hasOwnProperty('switch') )
    console.log(switchHistory)
    const ledHistory = history.filter( r => r.status.hasOwnProperty('led') )
    return (
      <div className="Device">
        <label>
          <label>{this.props.document.alias}</label>
          <label>{' (' + this.props.document.kind + ')'}</label>
          <br />
          <br />
          status:
          <br />
          switch status:
          <label
            className={switchProp ? "digital-flag_on" : "digital-flag_off"}
            >{switchProp ? ' ON' : ' OFF'}
          </label>
          <br />
          switch history:
          <HistoryChart
            history={switchHistory}
            tag={'switch'}
          />
          <br />
          led status: 
          <label
            className={led ? "digital-flag_on" : "digital-flag_off"}
            >{led ? ' ON' : ' OFF'}
          </label>
          <br />
          led history: 
          <HistoryChart
            history={ledHistory}
            tag={'led'}
          />
        </label>
        <br />
        <Switch
          api={this.props.api}
          id={this.props.document.id}
          on={!led}
          name={'led'}
        />
      </div>
    )
  }
}

export default Device;
