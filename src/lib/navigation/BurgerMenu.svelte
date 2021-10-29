<script>
	import { createEventDispatcher } from 'svelte';
    // import img from '../../../static/images/'
	const dispatch = createEventDispatcher();

	export let burgerMenuClicked = false;

    const dispatchClick = () => {
        dispatch('burgerClicked')
    };

</script>

<div
	class="burger-menu w-[2.2rem] flex flex-col items-center justify-center gap-[0.5rem]
	cursor-pointer group sm:hidden"
	on:click={dispatchClick}>
	<span
		class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block transition-all duration-200 {burgerMenuClicked ? 'rotate-45  ' : ''}" />
	<span
		class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block transition-all duration-200 {burgerMenuClicked ? ' scale-50 opacity-0 ' : ''}" />
	<span
		class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block transition-all duration-200 {burgerMenuClicked ? '-rotate-45  ' : ''}" />
</div>

<style>
	.burger-menu > span {
		transform-origin: 1px 1px;
	}
</style>
