<script>
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name,
		toggledState = false,
		colorType,
		size;
	let width, height, spanWidth, spanHeight, translateX, col, colActive;
	
	const dispatchToggle = () => {
		dispatch('toggled', name); //'dmToggle'
	};

	const sizes = [
		//Height = width * 0.513513514
		{
			size: 'normal',
			width: 'w-[7.4rem]',
			height: 'h-[3.8rem]',
			translateX: 'translate-x-[3.6rem]',
			spanWidth: 'w-[3.4rem]',
			spanHeight: 'h-[3.4rem]'
		},
		{
			size: 'small',
			width: 'w-[5rem]',
			height: 'h-[2.57rem]',
			translateX: 'translate-x-[2.3rem]',
			spanWidth: 'w-[2.15rem]',
			spanHeight: 'h-[2.15rem]'
		}
	];

	const colors = [
		{
			color: 'teal',
			col: 'bg-teal-400',
			colActive: 'bg-teal-700'
		},
		{
			color: 'blue',
			col: 'bg-blue-400',
			colActive: 'bg-blue-700'
		}
	];

	const updateVariables = () => {
		width = sizes.find((s) => s.size === size).width;
		height = sizes.find((s) => s.size === size).height;
		spanWidth = sizes.find((s) => s.size === size).spanWidth;
		spanHeight = sizes.find((s) => s.size === size).spanHeight;
		translateX = sizes.find((s) => s.size === size).translateX;
		col = colors.find((c) => c.color === colorType).col;
		colActive = colors.find((c) => c.color === colorType).colActive;
	};

	onMount(() => updateVariables());
</script>

<button
	class="{width}
	{height} rounded-full cursor-pointer border-2 border-transparent inline-flex flex-shrink-0
	transition-colors duration-200 ease-in-out {!toggledState ? col : colActive}"
	role="switch"
	tabindex="0"
	aria-checked="false"
	on:click={dispatchToggle}>
	<span
		aria-hidden="true"
		class="
		{spanWidth}
		{spanHeight} bg-white rounded-full transition inline-block duration-200 ease-in-out {!toggledState ? 'translate-x-0' : translateX}" />
</button>
