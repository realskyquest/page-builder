<script>
	import { base } from '$app/paths';
	const image = `${base}/img.jpg`;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container-fluid">
	<p class="display-1 text-center">Lorem ipsum dolor.</p>
	<div class="container text-center">
		<img
			src={`${base}/img.jpg`}
			class="img rounded-5 shadow-lg"
			alt="Cinque Terre"
			width="200"
			height="200"
		/>

		<p>
			Lorem ipsum dolor sit amet consectetur adipiscing elit morbi parturient, primis duis taciti
			fames pulvinar proin sociis iaculis risus rutrum, facilisi viverra vulputate blandit ante
			ultricies massa orci.
		</p>
	</div>
</div>
