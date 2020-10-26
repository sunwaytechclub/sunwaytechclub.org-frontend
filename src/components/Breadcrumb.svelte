<script>
	export let paths = ["Past Events", "AGM"];
</script>

<style>
	.breadcrumb {
		/* Color */
		background: rgba(0, 0, 0, 0.699);

		/* Effect */
		border-radius: 20px;
		padding: 15px;

		/* Layout */
		width: min-content;
		height: 50px;

		display: flex;
		align-items: center;
	}
	.breadcrumb__path {
		color: white;
		font-family: var(--title);
		font-weight: 500;
	}
	.breadcrumb__path::before {
		content: url(/assets/arrow_without_tail.svg);
		margin: 0 10px;
	}
</style>

<div class="breadcrumb">
	<img src="/assets/arrow.svg" alt="arrow" />
	{#each paths as path}<span class="breadcrumb__path">path</span>{/each}
</div>
