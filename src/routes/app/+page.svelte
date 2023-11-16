<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { html } from '@codemirror/lang-html';
	import { htmlCode } from '$lib/htmlCode.js';
	import { header } from '$lib/header.js';

	let screen = false;
	let value = '';
	$: view = htmlCode(value);
</script>

<svelte:head>
	<title>App</title>
</svelte:head>

<div class="container-fluid">
	<div class="container">
		<form>
			<div class="form-check form-switch">
				<input
					class="form-check-input"
					id="screen"
					type="checkbox"
					name="screen"
					bind:checked={screen}
				/>
				<label class="form-check-label" for="screen">Preview</label>
			</div>
		</form>
	</div>

	<div class="container mt-2 mb-2">
		<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
			Bootstrap 5 snippets
		</button>
	</div>
	<div class="container mb-2">
		<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#export">
			Export
		</button>
	</div>

	<div class="row" />

	{#if screen === false}
		<div class="row">
			<div class="col">
				<div class="container border" style="width: 400px;height: 500px; overflow-y: auto;">
					<CodeMirror bind:value lang={html()} />
				</div>
			</div>
			<div class="col">
				<div class="container border">
					<iframe title="preview" width="100%" height="500px" srcdoc={view} />
				</div>
			</div>
		</div>
	{:else}
		<iframe title="preview" width="100%" height="800px" srcdoc={view} />
	{/if}
</div>

<div class="modal" id="myModal">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Bootstrap 5 snippets</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal" />
			</div>
			<div class="modal-body">
				<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#header">
					Header
				</button>

				<div id="header" class="collapse">
					{#each header as snippet}
						<div class="container border mt-1 mb-1">
							<p>{snippet.name}</p>
							<button
								type="button"
								class="btn btn-secondary"
								on:click={() => {
									value += snippet.code;
								}}>Insert</button
							>
							<div class="container border mt-1 mb-1">
								<iframe
									title={snippet.name}
									width="100%"
									height="200"
									srcdoc={htmlCode(snippet.code)}
								/>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="modal" id="export">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Export</h4>
				<button type="button" class="btn-close" data-bs-dismiss="modal" />
			</div>
			<div class="modal-body">
				<button
					class="btn btn-primary mb-2"
					on:click={() => {
						navigator.clipboard.writeText(value);
						alert('Export copied');
					}}>Copy to clipboard</button
				>
				<CodeMirror bind:value lang={html()} editable="false" readonly="true" />
			</div>
		</div>
	</div>
</div>
