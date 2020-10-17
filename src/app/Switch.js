import React from 'react'

class Switch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            led: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }
    handleResponse (body, JWR) {
        console.log('Sails responded with: ', body);
        // console.log('with headers: ', JWR.headers);
        console.log('and with status code: ', JWR.statusCode);
    }
    handleClick(){
        const reqOptions = {
            method: 'patch',
            url: '/device/' + this.props.id,
            data: {
                id: this.props.id,
                settings: {led: this.state.led}
            },
            headers: {
            }
        };
        this.props.api.socket.request(reqOptions, this.handleResponse);
        // Switch state.led
        const led = !this.state.led;
        this.setState({led: led});
    }
    render(){
        return (
            <div>
                <p>Set the led:</p>
                <button className={this.state.led ? "switch_on" : "switch_off"} onClick={this.handleClick}>{this.state.led ? 'Turn ON' : 'Turn OFF'}</button>
            </div>
        )
    }
}

export default Switch;