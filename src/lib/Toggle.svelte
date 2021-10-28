<script>
	export let name,
		toggled = false;
	$: responsiveToggled = toggled;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const dispatchToggle = () => {
        console.log(`Dispatching toggled with name: ${name}`)
		dispatch('toggled', name);
	};
</script>

<button
	class="w-[7.4rem] h-[3.8rem] rounded-full cursor-pointer border-2 border-transparent inline-flex
	flex-shrink-0 transition-colors duration-200 ease-in-out {!responsiveToggled ? 'bg-teal-700' : 'bg-teal-900' }"
	role="switch"
	tabindex="0"
	aria-checked="false"
	on:click={dispatchToggle}>
	<span
		aria-hidden="true"
		class="h-[3.4rem] w-[3.4rem] bg-white rounded-full transition inline-block duration-200
		ease-in-out {!responsiveToggled ? 'translate-x-0' : 'translate-x-[3.6rem]'}"
		/>
</button>

<style>

</style>
