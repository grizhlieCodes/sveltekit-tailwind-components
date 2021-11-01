<script>
	import '../app.css';
	import Toggle from '$lib/Toggle.svelte';
	import {writable} from 'svelte/store'
	import { onMount, setContext } from 'svelte';
	import DarkMode from '$lib/stores/darkMode.js';
	import PlainNavBar from '$lib/navigation/normal-nav/PlainNavBar.svelte';
	import FluidNav from '$lib/navigation/fluid-nav/FluidNav.svelte';
	import {calcRealSize} from '$lib/scripts/helpers.js'

	$: dmToggleData = {
		name: 'dmToggle',
		toggledState: $DarkMode,
		size: 'normal',
		colorType: 'teal'
	};

	onMount(() => {
		DarkMode.checkDarkmode();
	});

	const handleToggle = (e) => {
		let name = e.detail;
		const handleDM = name === 'dmToggle' ? DarkMode.toggleDarkmode() : '';
	};


	//Size
	let innerWidth, realSize = writable('');
	setContext('size', realSize)
	$: realWidth = innerWidth - 10;



	$: realSize.set(calcRealSize(realWidth))

</script>

<svelte:window bind:innerWidth />

<!-- <PlainNavBar>
	<svg width="100%" height="100%" viewBox="0 0 222 222" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" slot="logo" class=" transition-colors">
		<circle cx="110.872" cy="48.693" r="48.693"/>
		<circle cx="172.974" cy="173.051" r="48.693"/>
		<circle cx="48.693" cy="173.051" r="48.693"/>
	</svg>
</PlainNavBar> -->

<FluidNav>
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 222 222"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
		slot="logo"
		class=" transition-colors">
		<circle cx="110.872" cy="48.693" r="48.693" />
		<circle cx="172.974" cy="173.051" r="48.693" />
		<circle cx="48.693" cy="173.051" r="48.693" />
	</svg>
</FluidNav>

<slot />

<div class="fixed left-[2rem] bottom-[2rem]">
	<Toggle {...dmToggleData} on:toggled={handleToggle} />
</div>

<style>
	svg {
		transition-duration: 0ms;
	}
	:global(body.dark) {
		fill: #6366F1;
	}
	:global(body:not(.dark)) {
		fill: #6366F1;
	}
</style>
