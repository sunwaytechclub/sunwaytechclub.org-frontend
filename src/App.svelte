<script>
	import { onDestroy } from "svelte";
	import { Route, params, uri } from "@/components/stores.js";
	import router from "@/rootRoutes";
	import TopNavbar from "@/components/TopNavbar.svelte";
	import SideNavbar from "@/components/SideNavbar.svelte";

	let expand = false;
	let mobile = window.innerWidth < 1100;

	uri.set(location.pathname);
	function track(obj) {
		$uri = obj.state || obj.uri || location.pathname;
		if (window.ga) ga.send("pageview", { dp: $uri });
	}

	addEventListener("replacestate", track);
	addEventListener("pushstate", track);
	addEventListener("popstate", track);
	addEventListener("resize", () => {
		mobile = window.innerWidth < 1100;
	});

	router.listen();

	onDestroy(router.unlisten);
</script>

<style>
	* {
		transition: transform 0.2s ease-in-out;
	}
	.wrapper {
		width: 100vw;
		overflow: hidden;
	}
	.wrapper--hozizontal {
		display: flex;
	}
	.expand {
		transform: translate3d(75vw, 0, 0);
	}
</style>

<div class="wrapper" class:wrapper--hozizontal={!mobile}>
	{#if mobile}
		<TopNavbar bind:expand />
	{:else}
		<SideNavbar />
	{/if}
	<main class="main" class:expand>
		<svelte:component this={$Route} {$params} />
	</main>
</div>
