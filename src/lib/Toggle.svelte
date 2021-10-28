<script>
	//We get the below 'name' and 'toggled' variables from wherever we use this component in.
	export let name,
		toggled = false;
	$: responsiveToggled = toggled;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//When button clicked, dispatch an event.
	//We control what happens THERE, not here.
	//Include the name of the dispatched 'toggle' incase you use multiple toggles and need to differentiate between them.
	const dispatchToggle = () => {
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
