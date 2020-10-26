<script>
	import { onDestroy } from "svelte";
	import { Route, params, uri } from "@/components/stores.js";
	import router from "@/rootRoutes";
	import TopNavbar from "@/components/TopNavbar.svelte";

	let expand = false;

	uri.set(location.pathname);
	function track(obj) {
		$uri = obj.state || obj.uri || location.pathname;
		if (window.ga) ga.send("pageview", { dp: $uri });
	}

	addEventListener("replacestate", track);
	addEventListener("pushstate", track);
	addEventListener("popstate", track);

	router.listen();

	onDestroy(router.unlisten);
</script>

<style>
	* {
		transition: transform 0.2s ease-in-out;
	}
	.main {
		width: 100vw;
		overflow: hidden;
	}
	.expand {
		transform: translate3d(75vw, 0, 0);
	}
</style>

<TopNavbar bind:expand />
<main class="main" class:expand>
	<svelte:component this={$Route} {$params} />
</main>
