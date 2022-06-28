<script>
    import {api} from '../stores/api'
    import HistoryChart from '../components/HistoryChart.svelte'
    import Switch from '../components/Switch.svelte'
    export let device;

    const switchProp = device.status.switch
    $: led = device.status.led
    const history = device.history
    const switchHistory = history.filter( r => r.status.hasOwnProperty('switch') )
    // console.log(switchHistory)
    const ledHistory = history.filter( r => r.status.hasOwnProperty('led') )

    // $: led = device.settings.led // no preciso definir asi

    $:{
        // console.log(' veo led ', led)
    }
</script>
<div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
    <div class="p-8 ... text-gray-700 text-base my-4 ...">
        id: {device.id}
        <br />
        alias: {device.alias}
        <br />
        kind: {device.kind}
        <br />
        led status: <div class={device.status.switch? "bg-yellow-400" : "bg-blue-600"}>{device.status.led ? ' ON' : ' OFF'}</div>
        led history: <HistoryChart history={ledHistory} tag={'led'} />
        <br />
        switch status: <div class={device.status.switch? "bg-yellow-400" : "bg-blue-600"}>{device.status.switch ? ' ON' : ' OFF'}</div>
        switch history: <HistoryChart history={switchHistory} tag={'switch'}/>
        <br />
        <Switch api={api} id={device.id} on={!led} name={'led'}/>
    </div>
</div>
