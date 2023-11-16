<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container-fluid">
	<p class="display-1 text-center">Page builder</p>
	<div class="container text-center">
		<p>Built to quickly create pages.</p>
		<p>Uses bootstrap 5 and livecanvas snippets</p>
		<a href="{base}/app/" class="badge bg-primary mt-5">
			<span class="h1"> Try it out </span>
		</a>
	</div>
</div>
