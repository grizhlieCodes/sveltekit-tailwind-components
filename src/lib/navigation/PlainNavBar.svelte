<script>
	import { fly } from 'svelte/transition';
	// export let links

	let links = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Services',
			path: '/services'
		}
	];

	//Assumptions
	// User will use an svg or png logo with 100% width set. Ratio of image will determine its width.
	// User will give an array of objects for links. Each object will have a link-path and name and suggested class.
	let mobileMenuClicked = false;
	$: console.log(mobileMenuClicked);
</script>

<header class="w-full flex px-[2.4rem] py-[3rem] justify-between items-center relative border-b-[1px]">
	<div class="h-[3rem]">
		<slot name="logo" />
	</div>
	<div
		class="burger-menu w-[2.2rem] flex flex-col items-center justify-center gap-[0.5rem]
		cursor-pointer group sm:hidden"
		on:click={() => (mobileMenuClicked = !mobileMenuClicked)}>
		<span
			class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block 
			transition-all duration-200 {mobileMenuClicked ? 'rotate-45  ' : ''}" />
		<span
			class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block 
			transition-all duration-200 {mobileMenuClicked ? ' scale-50 opacity-0 ' : ''}" />
		<span
			class=" bg-gray-400 dark:bg-gray-300 w-full h-[0.2rem] block 
			transition-all duration-200 {mobileMenuClicked ? '-rotate-45  ' : ''}" />
	</div>
	{#if mobileMenuClicked}
		<div
			transition:fly={{ y: 5 }}
			class=" bg-gray-50 py-10 px-10 absolute top-[100%] left-0 flex flex-col w-full items-center
			sm:hidden">
			<div class="w-full h-[0.1rem] bg-blue-200 my-10" />
			<nav class=" flex flex-col w-full items-center gap-[1rem]">
				{#each links as { path, name }}
					<a href={path} class=" text-[1.5rem] text-blue-300 hover:text-blue-400">{name}</a>
				{/each}
			</nav>
		</div>
	{/if}
	<nav class="hidden sm:flex flex-row w-full justify-end items-center gap-[1rem]">
		{#each links as { path, name }}
			<a href={path} class="text-[1.5rem] text-blue-300 hover:text-blue-400">{name}</a>
		{/each}
	</nav>
</header>

<style>
	.burger-menu > span {
		transform-origin: 1px 1px;
	}
</style>
