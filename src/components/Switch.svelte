<script>
    export let api;
    export let id;
    export let on;
    export let name;
    
    let state = {};

    const handleResponse = (body, JWR) => {
        console.log('Sails responded with: ', body);
        // console.log('with headers: ', JWR.headers);
        // console.log('and with status code: ', JWR.statusCode);
    }
    
    const handleClick = () => {
        const reqOptions = {
            method: 'patch',
            // url: '/device/' + this.props.id,
            url: '/device/' + id,
            data: {
                // id: this.props.id,
                id: id,
                // settings: {led: this.state.on}
                // settings: {led: state.on}
                settings: {led: on}
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
</script>

<div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Set {name}: </label>
    <button type="button" on:click={handleClick} class={on ? "switch_on" : "switch_off"}>{on ? 'Turn ON' : 'Turn OFF'}</button>
</div>