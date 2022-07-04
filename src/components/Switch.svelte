<script>
    export let api;
    export let id;
    export let on;
    export let key;
    
    let state = {};

    const handleResponse = (body, JWR) => {
        console.log('Sails responded with: ', body);
        // console.log('with headers: ', JWR.headers);
        // console.log('and with status code: ', JWR.statusCode);
    }
    
    const handleClick = () => {
        const settings = {}
        settings[key] = on
        const reqOptions = {
            method: 'patch',
            // url: '/device/' + this.props.id,
            url: '/device/' + id,
            data: {
                // id: this.props.id,
                id: id,
                // settings: {led: this.state.on}
                // settings: {led: state.on}
                settings: settings
            },
            headers: {
            }
        };
        // this.props.api.socket.request(reqOptions, this.handleResponse);
        api.socket.request(reqOptions, handleResponse);
        // Switch state
        // const on = !this.state.on;
        // const on = !state.on;
        const setOn = !on;
        // this.setState({on});
        
        // setState({on});
        setState(setOn);
    }

    const setState = (on) => {
        state.on = on
    }

    // onMount(() => {
	// 	console.log(on)
	// });

    // onMount(async () => {
	// 	const res = await fetch(`/tutorial/api/album`);
	// 	photos = await res.json();
	// });
    const switch_off = "bg-yellow-400 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    const switch_on = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"

</script>

<div>
    Set {key}
    <button on:click={handleClick} class={on? switch_on : switch_off}>{on ? 'Turn ON' : 'Turn OFF'}</button>
</div>