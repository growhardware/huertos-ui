
<script>
    import { SvelteGantt, SvelteGanttTable } from 'svelte-gantt'
    
    export let history;

    $: switchHistory = history.filter( r => r.status.hasOwnProperty('switch') )
    $: ledHistory = history.filter( r => r.status.hasOwnProperty('led') )
</script>

<div>
    led: {ledHistory}
    <br/>
    switch: {switchHistory}
</div>