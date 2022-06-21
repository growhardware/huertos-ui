<script>
    import LogOut from '../components/LogOut.svelte'    
    import {userName} from "../stores/userstore";

</script>
<div class="float-right">
    <h1 >userName: {$userName}</h1>
    <LogOut/>
</div>
<nav class="flex justify-center w-full">
    <a class="mx-4 text-lg" href="/">Home</a>
    <a class="mx-4 text-lg" href="/devices">Devices</a>
</nav>
