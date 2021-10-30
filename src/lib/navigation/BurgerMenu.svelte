<script>
	import { createEventDispatcher } from 'svelte';
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
		class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block transition-all duration-200 {burgerMenuClicked ? 'rotate-45' : ''} origin-[1px]" />
	<span
		class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block transition-all duration-200 {burgerMenuClicked ? ' scale-50 opacity-0' : ''} origin-[1px]" />
	<span
		class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block transition-all duration-200 {burgerMenuClicked ? '-rotate-45  ' : ''} origin-[1px]" />
</div>