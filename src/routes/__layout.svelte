<script>
	import '../app.css';
	import Toggle from '$lib/Toggle.svelte'
	import {onMount} from 'svelte';
	import DarkMode from '$lib/stores/darkMode.js' //This is where all the work happens

	$: dmToggleData = {
		name: 'dmToggle',
		toggled: $DarkMode
	}
	
	onMount(() => {
		DarkMode.checkDarkmode()
	})

	const handleToggle = (e) => {
		let name = e.detail
		if(name === 'dmToggle'){
			DarkMode.toggleDarkmode()
		}
	}
</script>

<slot />

<div class="absolute left-[2rem] bottom-[2rem]">
	<Toggle {...dmToggleData} on:toggled={handleToggle}/>
</div>

<style>

</style>