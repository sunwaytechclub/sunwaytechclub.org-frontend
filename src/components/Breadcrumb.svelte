<script>
	export let paths = [
		{
			title: "Past Events",
			path: "/event",
		},
		{
			title: "AGM",
			path: "/event/1",
		},
	];
</script>

<style>
	/* Breadcrumb */
	.breadcrumb {
		/* Color */
		background: rgba(0, 0, 0);

		/* Effect */
		border-radius: 20px;
		padding: 15px 20px 15px 25px;
		opacity: 0.3;

		/* Layout */
		min-width: 215px;
		width: min-content;
		height: 50px;

		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.breadcrumb__navigate_back {
		margin-right: 10px;

		cursor: pointer;
	}

	/* Path */
	.breadcrumb__paths {
		display: flex;
	}
	.breadcrumb__path {
		color: white;
		font-family: var(--title);
		font-weight: 500;
		font-size: calc(var(--p2) + 1px);
		text-decoration: none;

		display: flex;
		white-space: nowrap;
	}
	.breadcrumb__path:not(:first-of-type) {
		margin-right: 10px;
	}
	.breadcrumb__path::before {
		content: "";
		margin: 0 10px;
	}
	.breadcrumb__path:not(:first-of-type)::before {
		content: url(/assets/arrow_without_tail.svg);
	}
</style>

<div class="breadcrumb">
	<img
		src="/assets/arrow.svg"
		alt="arrow"
		class="breadcrumb__navigate_back"
		on:click={() => {
			let lastPath = paths[paths.length - 2];
			history.pushState(null, lastPath, lastPath);
		}} />
	<div class="breadcrumb__paths">
		{#each paths as path}
			<a href={path.path} class="breadcrumb__path">{path.title}</a>
		{/each}
	</div>
</div>
