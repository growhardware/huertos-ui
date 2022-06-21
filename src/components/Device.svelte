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
<!-- <div class="container mx-auto"> -->
    <div class="max-w-sm rounded overflow-hidden shadow-lg float-left">
        <div class="p-8 ... text-gray-700 text-base my-4 ...">
            id: {device.id}
            alias: {device.alias}
            <br />
            kind: {device.kind}
            <br />
            status: {device.settings.led}
            <br />
            switch status:
            <br />
            <div class={device.status.switch ? "digital-flag_on" : "digital-flag_off"}>{device.status.switch ? ' ON' : ' OFF'}</div>
            switch history:
            <HistoryChart
            history={switchHistory}
            tag={'switch'}
            />
            <br />
            <Switch
                api={api}
                id={device.id}
                on={!led}
                name={'led'}
                />
                **************
        </div>
    </div>
<!-- </div> -->
