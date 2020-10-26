<script>
	import { uri } from "@/components/stores.js";
	import categorize from "@/utils/categorizeURI";

	export let expand = false;
	export let navigations = [
		{
			title: "Upcoming Events",
			path: "/event",
			active: false,
		},
		{
			title: "Past Events",
			path: "/event/past",
			active: false,
		},
		{
			title: "Merchandise Store",
			path: "/stores",
			active: false,
		},
		{
			title: "My Profile",
			path: "/profile",
			active: false,
		},
	];

	uri.subscribe((newURI) => {
		/** Get the category of the current path
		/* e.g. 
		/* current path = /event/future/settings
		/* available paths = ['/event', '/event/future']
		/* The algorithm will categorize it under '/event/future' category
		*/
		let navigation = categorize(navigations, newURI);
		navigations = navigations.map((n) => {
			n.active = false;
			return n;
		});
		navigation.active = true;
	});
</script>

<style>
	* {
		transition: transform 0.2s ease-in-out;
	}

	/* Effect */
	.expand {
		transform: translate3d(0, 0, 0) !important;
	}
	.navbarExpand {
		transform: translate3d(75vw, 0, 0);
	}
	.active {
		background-color: #32363a;
	}

	.active::after {
		content: "";

		background-color: var(--purple);

		width: 10px;
		height: 100%;
		position: absolute;
		right: 0;
	}

	/* Navbar and sidenav */
	.nav {
		width: 100vw;
		height: 54px;
		padding: 20px;
	}
	.sidenav {
		background-color: #282d31;

		height: 100vh;
		width: 75vw;
		position: fixed;
		top: 0;
		transform: translate3d(-75vw, 0, 0);
	}

	/* Header */
	.header {
		padding: 25px 15px;
		display: flex;
	}
	.header__logo {
		width: 37px;
	}
	.header__logo__name {
		margin-left: 7px;

		color: white;
		font-family: var(--title);
		font-size: calc(var(--h4) + 2px);
		font-weight: bold;
	}
	.header__logo__name_dot {
		color: var(--orange);
	}

	/* Navigation */
	.navigation {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
	}
	.navigation__tab {
		height: 60px;
		display: flex;
		align-items: center;
		position: relative;

		text-decoration: none;
	}
	.navigation__tab__link {
		color: rgb(236, 236, 236);
		font-weight: bold;
		font-size: calc(var(--p2) + 1.5px);

		padding-left: 20px;
	}
</style>

<div class="sidenav" class:expand>
	<!-- Header -->
	<div class="header">
		<img class="header__logo" src="/icon.png" alt="logo" />
		<p class="header__logo__name">
			stc<span class="header__logo__name_dot">.</span>
		</p>
	</div>

	<!-- Navigation -->
	<ul class="navigation">
		{#each navigations as n}
			<a href={n.path} class="navigation__tab" class:active={n.active}>
				<p class="navigation__tab__link">{n.title}</p>
			</a>
		{/each}
	</ul>
</div>

<!-- Mobile top nav bar with hamburger -->
<nav class="nav" class:navbarExpand={expand}>
	<img
		src="/assets/hamburger.svg"
		alt="hamburger"
		on:click={() => {
			expand = !expand;
		}} />
</nav>
