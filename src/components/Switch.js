import React from 'react'

class Switch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            on: this.props.on,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }
    handleResponse (body, JWR) {
        console.log('Sails responded with: ', body);
        // console.log('with headers: ', JWR.headers);
        // console.log('and with status code: ', JWR.statusCode);
    }
    handleClick(){
        const reqOptions = {
            method: 'patch',
            url: '/device/' + this.props.id,
            data: {
                id: this.props.id,
                settings: {led: this.state.on}
            },
            headers: {
            }
        };
        this.props.api.socket.request(reqOptions, this.handleResponse);
        // Switch state
        const on = !this.state.on;
        this.setState({on});
    }
    render(){
        return (
            <div>
                <label>Set {this.props.name}: </label>
                <button className={this.state.on ? "switch_on" : "switch_off"} onClick={this.handleClick}>{this.state.on ? 'Turn ON' : 'Turn OFF'}</button>
            </div>
        )
    }
}

export default Switch;