<script>
	import '../app.css';
	import Toggle from '$lib/Toggle.svelte'
	import {onMount} from 'svelte';
	import DarkMode from '$lib/stores/darkMode.js' //This is where all the work happens
	import PlainNavBar from '$lib/navigation/PlainNavBar.svelte';

	$: dmToggleData = {
		name: 'dmToggle',
		toggledState: $DarkMode,
		size: 'normal',
		colorType: 'teal'
	}

	onMount(() => {
		DarkMode.checkDarkmode()
	})

	const handleToggle = (e) => {
		let name = e.detail
		const handleDM = name === 'dmToggle' ? DarkMode.toggleDarkmode() : '';
	}
</script>

<PlainNavBar>
	<svg width="100%" height="100%" viewBox="0 0 222 222" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" slot="logo">
		<circle cx="110.872" cy="48.693" r="48.693"/>
		<circle cx="172.974" cy="173.051" r="48.693"/>
		<circle cx="48.693" cy="173.051" r="48.693"/>
	</svg>
</PlainNavBar>


<slot />

<div class="absolute left-[2rem] bottom-[2rem]">
	<Toggle {...dmToggleData} on:toggled={handleToggle}/>
</div>

<style>

</style>