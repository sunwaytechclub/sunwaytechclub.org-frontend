<script>
  import { uri } from "@/components/stores.js";
  import categorize from "@/utils/categorizeURI";
  import { fly } from "svelte/transition";
  import { linear } from "svelte/easing";
  import { onDestroy } from "svelte";

  export let expand = false;
  export let navigations = [
    {
      title: "Upcoming Events",
      path: "/event"
    },
    {
      title: "Past Events",
      path: "/event/past"
    },
    {
      title: "Merchandise Store",
      path: "/stores"
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    }
  ];
  navigations = navigations.map(n => {
    n["active"] = false;
    return n;
  });

  uri.subscribe(newURI => {
    // Get the category of the current path
    let navigation = categorize(navigations, newURI);
    navigations = navigations.map(n => {
      n.active = false;
      return n;
    });
    navigation.active = true;
    expand = false;
  });

  function avatar_loaded(img) {
    setTimeout(() => {
      img.src = "/assets/avatar.png";
    }, 2000);
  }

  onDestroy(() => {
    expand = false;
  });
</script>

<style>
  * {
    transition: transform 0.2s ease-in-out;
  }

  /* Navbar */
  .nav {
    width: 100vw;
    height: 60px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav--expand {
    transform: translate3d(75vw, 0, 0);
  }

  .nav__hamburger {
    cursor: pointer;
  }

  /* Sidenav */
  .sidenav {
    background-color: #282d31;

    height: 100vh;
    width: 75vw;
    position: fixed;
    top: 0;
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
  .navigation__tab--active {
    background-color: #32363a;
  }

  .navigation__tab--active::after {
    content: "";

    background-color: var(--purple);

    width: 10px;
    height: 100%;
    position: absolute;
    right: 0;
  }

  .navigation__tab__link {
    color: rgb(236, 236, 236);
    font-weight: bold;
    font-size: calc(var(--p2) + 1.5px);

    padding-left: 20px;
  }

  /* Profile */
  .profile__avatar {
    width: 35px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: var(--yellow);
  }
  .profile__avatar__icon {
    width: 19px;
  }
</style>

{#if expand}
  <div
    class="sidenav"
    transition:fly={{ x: -300, duration: 200, easing: linear, opacity: 1 }}>
    <!-- Header -->
    <div class="header">
      <img class="header__logo" src="/icon.png" alt="logo" />
      <p class="header__logo__name">
        stc
        <span class="header__logo__name_dot">.</span>
      </p>
    </div>

    <!-- Navigation -->
    <ul class="navigation">
      {#each navigations as n}
        <a
          href={n.path}
          class="navigation__tab"
          class:navigation__tab--active={n.active}>
          <p class="navigation__tab__link">{n.title}</p>
        </a>
      {/each}
    </ul>
  </div>
{/if}

<!-- Mobile top nav bar with hamburger -->
<nav class="nav" class:nav--expand={expand}>
  <img
    src="/assets/hamburger.svg"
    alt="hamburger"
    class="nav__hamburger"
    on:click={() => {
      expand = !expand;
    }} />
  <div
    class="profile"
    on:click={() => {
      history.pushState(null, '/profile', '/profile');
    }}>
    <div class="profile__avatar">
      <img
        use:avatar_loaded
        src="/assets/avatar.gif"
        alt="avatar"
        class="profile__avatar__icon" />
    </div>
  </div>
</nav>
