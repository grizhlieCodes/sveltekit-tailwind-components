<script>
	import { fly } from 'svelte/transition';
</script>

<div
	class="w-full h-[max-content] absolute top-[120%] left-0 shadow-lg ring-1 ring-black ring-opacity-5
	rounded-lg sm:hidden px-10 py-10 dark:bg-gray-700 transition-colors"
	transition:fly={{ y: 5 }}>
	<slot />
</div>