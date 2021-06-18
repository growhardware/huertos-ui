import React from 'react';
import DeviceService from '../services/DeviceService'

class CreateDevice extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            creating: false,
            alias: '',
            kind: '',
            port: '',
        }
    }
    handleClick(){
        this.setState({creating: true});
    }
    handleResponse(body, JWR){
        if(JWR.statusCode === 200){
            console.log('Created device. ID: ', body.id);
            this.setState({creating: false});
            this.props.onCreated();
        }
        else{
            console.log('Error: ', JWR);
        }
    }
    handleSubmit(event){
        const attributes = {
            alias: this.state.alias,
            kind: this.state.kind,
            port: this.state.port,
        };
        DeviceService.create(this.props.api, attributes, this.handleResponse);
        event.preventDefault();
    }
    render() {
        const renderForm = this.state.creating;
        return (
            <div>{
            renderForm ?
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <br/>alias:<br/>
                        <input type="text" value={this.state.value} onChange={(e) => this.setState({alias: e.target.value})}/>
                        <br/>kind:<br/>
                        <input type="text" value={this.state.kind} onChange={(e) => this.setState({kind: e.target.value})}/>
                        <br/>port:<br/>
                        <input type="text" value={this.state.port} onChange={(e) => this.setState({port: e.target.value})}/>
                    </label>
                    <br/><input type="submit" value="Submit"/>
                </form>
            : <button onClick={this.handleClick}>Create a device</button>
            }</div>
        );
    }  
}

export default CreateDevice;
