<script>
	import { fly } from 'svelte/transition';
	import BurgerMenu from '../BurgerMenu.svelte';
	import HeaderModal from './NavModal.svelte'
	import MobileLink from '$lib/navigation/normal-nav/MobileLink.svelte'

	let links = [
		{
			name: 'Home',
			path: '/',
			smallName: 'home'
		},
		{
			name: 'About',
			path: '/about',
			smallName: 'about'
		},
		{
			name: 'Services',
			path: '/services',
			smallName: 'services'
		}
	];

	let burgerMenuClicked = true;

	const handleBurgerClick = () => {
		burgerMenuClicked = !burgerMenuClicked;
	};
</script>

<header
	class="w-full flex py-[3rem] justify-between items-center relative border-b-[1px] border-gray-200
	dark:border-gray-700 transition-colors">
	<div class="h-[3rem]">
		<slot name="logo" />
	</div>

	<BurgerMenu {burgerMenuClicked} on:burgerClicked={handleBurgerClick} />

	{#if burgerMenuClicked}
		<HeaderModal>
				{#each links as link}
					<MobileLink {link} />
				{/each}
		</HeaderModal>
	{/if}
	<nav class="hidden sm:flex flex-row w-full justify-end items-center">
		{#each links as { path, name, smallName }}
			<a href={path} class="flex flex-row items-center justify-start gap-10">
				<p class="text-[1.5rem] text-gray-800 hover:bg-gray-200 dark:text-gray-300  px-8 py-4 dark:hover:bg-gray-700 rounded-lg">{name}</p> 
			</a>
		{/each}
	</nav>
	
</header>

<style>

</style>
