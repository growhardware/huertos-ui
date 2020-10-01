import React from 'react';

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
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
  }
  render() {
    return (
      <div>
        <label>
          kind:<br/>
          <label>{this.props.kind}</label>
          alias:<br/>
          <label>{this.props.alias}</label>
          status:<br/>
          led: <label>{this.props.status.led}</label>
          pushButton: <label>{this.props.status.pushButton}</label>
        </label>
        <input type="submit" value="Submit" /> 
      </div>
    );
  }
}

export default Device;