<script>
import { api } from "../stores/api";
import Device from './Device.svelte';
import _ from 'underscore';
import AddDeviceModal from './AddDeviceModal.svelte';
// import CreateDevice from '../components/CreateDevice.svelte'

    let state = {};
    const handleSocket = (msg) => {
        console.log('Sails was sent a message: ', msg)
        const devices = _.toArray(state.devices)
        const index = _.findIndex(devices, { id: msg.id })
        
        if (msg.data.status !== undefined) {
            let dev = devices[index]
            dev['status'] = msg.data.status
            dev['history'] = msg.previous.history
            devices[index] = dev
        }
        setState(devices)
    }
    const setState = (msg) => {
        msg?.length > 0 ? state.devices = [...msg] : msg?.devices?.length > 0 ? state.devices = [...msg.devices] : state.devices
    }
    
    const getDevices = () =>{
        api.socket.get('/device/get', handleResponse)
    }

    const handleResponse = (msg) => {
        setState({ devices: msg })
    }
    
    api.socket.on('device', handleSocket);
    getDevices();
    
    $: deviceList = state.devices

    let searchTerm = "my device";
</script>

<div>
    <div class="flex justify-center w-full">
        <input class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" bind:value={searchTerm} placeholder="Search" />
        <AddDeviceModal api={api}/>
    </div>
    <div class="flex justify-center w-full">
        {#if state.devices}
            {#each deviceList as device}
                <Device device={device}/>  
            {/each}
        {:else}
            <p>No devices</p>
        {/if}
        <!-- <CreateDevice api={api}/> -->
    </div>
    <!--<CreateDevice api={this.props.api} onCreated={this.getDevices} />-->
</div>
