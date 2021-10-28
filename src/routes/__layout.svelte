<script>
	import '../app.css';
	import Toggle from '$lib/Toggle.svelte'
	import {toggleDarkMode, checkDarkMode, setDarkMode} from '$lib/scripts/helpers.js'
	import {onMount} from 'svelte';
	let darkMode
	
	onMount(() => {
		darkMode = checkDarkMode()
		setDarkMode(darkMode)
		console.log('checked dm: ', darkMode)
	})

	const handleToggle = (e) => {
		let name = e.detail
		if(name === 'dmToggle'){
			toggleDarkMode()
		}
		darkMode = !darkMode
		
	}
</script>

<slot />

<div class="absolute left-[2rem] bottom-[2rem]">
	<Toggle name="dmToggle" on:toggled={handleToggle} toggled={darkMode} />
</div>

<style>

</style>