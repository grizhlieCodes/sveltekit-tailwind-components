<script>
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
		},
	];

	//Assumptions
	// User will use an svg or png logo with 100% width set. Ratio of image will determine its width.
	// User will give an array of objects for links. Each object will have a link-path and name and suggested class.
</script>

<header>
	<div class="">
		<slot name="logo" />
	</div>
	<nav>
		{#each links as { path, name }}
			<a href={path} class="">{name}</a>
		{/each}
	</nav>
</header>

<style>

</style>
