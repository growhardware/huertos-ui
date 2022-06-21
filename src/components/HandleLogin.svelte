<script>
  	import { onMount } from 'svelte';
  	import { onDestroy } from 'svelte';
    import Nav from "../components/nav.svelte";
    import {fetchCookie } from '../stores/api';
    import { browser } from '$app/env'

    import {user, userName, lIn} from "../stores/userstore";
    import {signUp, handleResponse, login, handleLoginResponse} from "../services/session-service";
    import { api } from '../stores/api';

    let msg = {};
    
    $: isLoggedIn = !!$lIn;
    
    $: {
      console.log('observing $userName ' + $userName);
    }

    onMount(async () => {
      console.log('isLoggedIn >> ', isLoggedIn)
      // console.log('document.cookie>> ',document.cookie);
      // console.log('api IO > ', api);
	});

</script>
<svelte:head>
	<title>Growhardware - login / signup</title>
</svelte:head>

{#if isLoggedIn}
	<p>
    <Nav/>
	</p>
{:else}
<div class="flex justify-center items-center h-screen">
  <form class="w-full max-w-sm">
    <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Email Address
      </label>
    </div>
    <div class="md:w-2/3">
      <input bind:value={$userName} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  >
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input bind:value={msg.password} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input bind:value={msg.remember} class="mr-2 leading-tight" type="checkbox">
      <span class="text-sm">
        Remember me
      </span>
    </label>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
       <button type="button" on:click={login(api,{emailAddress:$userName, password:msg.password}, handleLoginResponse)} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      <button type="button" on:click={signUp(api, {emailAddress:$userName, password:msg.password, remember:msg.remember}, handleResponse)} class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
        Sign Up
      </button>
    </div>
  </div>
</form>
</div>
{/if}

