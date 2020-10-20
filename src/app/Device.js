import React from 'react';
import Switch from './Switch.js';
import '../App.css';

/*
class createDevice extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            What kind of device?<br/>
            <input type="text" value={this.state.kind} onChange={(e) => this.setState({kind: e.target.value})} />

         </label>
        </form>
      </div>
    );
  }
} 
*/

class Device extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      settings: {},
    };
    // this.handleSettingsChange = this.handleSettingsChange.bind(this);
  }
  render() {
    return (
      <div className="Device">
        <label>
          <label>{this.props.document.alias}</label>
          <label>{' ('+this.props.document.kind+')'}</label>
          <br/>
          <br/>status:
          <br/>pushButton: <label>{this.props.document.status.pushButton ? 'ON' : 'OFF'}</label>
          <br/>led: <label>{this.props.document.status.led ? 'ON' : 'OFF'}</label>
        </label>
        <br/><Switch api={this.props.api} id={this.props.document.id} on={this.props.document.status.led}></Switch>
      </div>
    );
  }
}

export default Device;