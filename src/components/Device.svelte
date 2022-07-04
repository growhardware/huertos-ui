<script>
    import {api} from '../stores/api'
    import HistoryChart from '../components/HistoryChart.svelte'
    import Switch from '../components/Switch.svelte'
    export let device;

    $: status = device.status

</script>
<div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
    <div class="p-8 ... text-gray-700 text-base my-4 ...">
        id: {device.id}
        <br/>
        alias: {device.alias}
        <br/>
        kind: {device.kind}
        <br/>
        led status: <div class={status.led? "text-yellow-400" : "text-blue-600"}>{status.led? ' ON' : ' OFF'}</div>
        <br/>
        switch status: <div class={status.switch? "text-yellow-400" : "text-blue-600"}>{status.switch? ' ON' : ' OFF'}</div>
        <br/>
        status history: <HistoryChart history={device.history}/>
        <br/>
        <Switch api={api} id={device.id} on={!status.led} key={'led'}/>
    </div>
</div>
