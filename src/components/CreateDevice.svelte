<script>
    import { createDevice } from '../services/device-service'
    export let api;
    let state = {
            creating: false,
            alias: '',
            kind: '',
            port: '',
        }
    
    const setState = ()=>{
        state.creating = true
    }
    const handleClick = ()=> {
        setState();
    }
    const handleResponse = (body, JWR)=>{
        if(JWR.statusCode === 200){
            console.log('Created device. ID: ', body.id);
            setState({creating: false});
            // props.onCreated();
        }
        else{
            console.log('Error: ', JWR);
        }
    }
    const handleSubmit=(event)=>{
        const attributes = {
            alias: state.alias,
            kind: state.kind,
            port: state.port,
        };
        createDevice(api, attributes, handleResponse);
        event.preventDefault();
    }

    $: renderForm = state.creating
</script>

<div>
    {#if renderForm}
        <form onSubmit={handleSubmit}>
            <label>
                <br/>alias:<br/>
                <input bind:value={state.value} type="text"/>
                <br/>kind:<br/>
                <input bind:value={state.kind} type="text"/>
                <br/>port:<br/>
                <input bind:value={state.port} type="text"/>
            </label>
            <br/><input type="submit" value="Submit"/>
        </form>
            
    {:else}
        <label></label>
    {/if}
    <button type="button" on:Click={handleClick}>{renderForm ? 'Cancel' : 'Create a device'}</button>
</div>