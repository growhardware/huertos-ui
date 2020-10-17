import React from 'react';
import Switch from './Switch.js'

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
      <div>
        <label>
          kind:<br/>
          <label>{this.props.document.kind}</label>
          <br/>alias:<br/>
          <label>{this.props.document.alias}</label>
          <br/>status:<br/>
          <br/>led: <label>{this.props.document.status.led}</label>
          <br/>pushButton: <label>{this.props.document.status.pushButton}</label>
        </label>
        <Switch api={this.props.api} id={this.props.document.id}></Switch>
      </div>
    );
  }
}

export default Device;