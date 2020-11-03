<script>
  import Button from "./Button.svelte";
  import { banner, bannerSlot } from "./SideNavbar.stores.js";
  import { uri } from "@/components/stores.js";
  import categorize from "@/utils/categorizeURI";
  import { fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let name = "Anonymous Cute Cute Girl";
  export let memberType = "Premium Member";
  export let expand = true;
  export let collapseFeature = false;
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
      path: "/store"
    },
    {
      title: "Dashboard",
      path: "/dashboard"
    }
  ];

  if (collapseFeature) {
    expand = false;
  }

  navigations = navigations.map(n => {
    n["active"] = false;
    return n;
  });

  uri.subscribe(newURI => {
    //  Get the category of the current path
    let navigation = categorize(navigations, newURI);
    navigations = navigations.map(n => {
      n.active = false;
      return n;
    });
    navigation.active = true;
  });
</script>

<style>
  * {
    font-family: var(--title) !important;
    transition: transform 0.3s ease-in-out;
  }

  /* Side Nav */
  .sidenav {
    padding: 40px 55px;
    box-shadow: 10px 10px 16px #f2f2f2;
    width: 300px;
    height: 100vh;
    position: fixed;
    background-color: white;
  }
  .sidenav__close__icon {
    position: absolute;
    right: 40px;
    top: 30px;
    width: 16px;
    cursor: pointer;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    font-weight: bold;
    font-size: var(--h3);
  }
  .header__logo {
    width: 55px;
    margin-right: 20px;
  }
  .header__logo__name {
    display: flex;
  }
  .header__logo__name_dot {
    color: var(--orange);
  }

  /* Sidenav Collapse */
  .sidenavCollapse {
    width: 90px;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 10px 10px 16px #f2f2f2;
    position: fixed;
  }
  .sidenavCollapse__hamburger {
    cursor: pointer;
    margin-top: 10px;
    width: 24px;
  }
  .sidenavCollapse__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sidenavCollapse__header__logo {
    width: 55px;
    margin-top: 30px;
  }
  .sidenavCollapse__profile {
    margin-bottom: 20px;
  }

  /* Navigation */
  .navigation {
    font-size: var(--p);
    font-weight: 700;
  }
  .navigation > * {
    margin-bottom: 35px;
    cursor: pointer;
    transition: transform 0.15s ease-in-out;
  }
  .navigation > *:not(:disabled):hover {
    /* Create zoom in effect on navigations that are not disabled and hovered */
    transform: perspective(1000px) translate3d(0, 0, 43px);
  }
  .navigation__tab {
    display: block;
    text-decoration: none;
  }
  .navigation__tab__link {
    margin-bottom: 35px;
    cursor: pointer;
    transition: transform 0.15s ease-in-out;
    color: #bdbdbd;
  }
  .navigation__tab__link--active {
    color: #393655 !important;
  }

  /* Example banner */
  .ads {
    text-align: center;
    font-size: var(--p2);
  }
  .ads__icon {
    margin-bottom: 27px;
  }

  /* Profile avatar */
  .profile {
    display: flex;
    margin-top: 55px;
    justify-content: center;
    cursor: pointer;
  }
  .profile__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    font-size: var(--p2);
  }
  .profile__details__name {
    font-weight: 700;
    color: #393655;
  }
  .profile__details__memberType {
    font-weight: 600;
    color: #bdbdbd;
  }
</style>

{#if collapseFeature && !expand}
  <div
    class="sidenavCollapse"
    transition:fly={{ x: -300, duration: 250, easing: cubicInOut, opacity: 0.5 }}>
    <div class="sidenavCollapse__header">
      <img
        src="/assets/hamburger-3-lines.svg"
        alt="hamburger"
        class="sidenavCollapse__hamburger"
        on:click={() => {
          expand = !expand;
        }} />
      <img
        src="/icon.png"
        class="sidenavCollapse__header__logo"
        alt="stc logo" />
    </div>
    <img
      src="/assets/avatar.png"
      class="sidenavCollapse__profile"
      alt="avatar" />
  </div>
{:else}
  <div
    class="sidenav"
    transition:fly={{ x: -300, duration: 250, easing: cubicInOut, opacity: 0.5 }}>
    <div class="header">
      <img src="/icon.png" class="header__logo" alt="stc logo" />
      <span class="header__logo__name">
        stc
        <span class="header__logo__name_dot">.</span>
      </span>
    </div>

    <!-- Close icon -->
    {#if collapseFeature}
      <img
        src="/assets/cross.svg"
        class="sidenav__close__icon"
        alt="close"
        on:click={() => {
          expand = !expand;
        }} />
    {/if}

    <!-- Navigations -->
    <ul class="navigation">
      {#each navigations as n}
        <a href={n.path} class="navigation__tab">
          <p
            class="navigation__tab__link"
            class:navigation__tab__link--active={n.active}>
            {n.title}
          </p>
        </a>
      {/each}
    </ul>

    <!-- Banner component -->
    {#if $banner}
      <slot>

        <!-- Enable dynamic slot assignment, use bannerSlot.set() to set banner -->
        {#if $bannerSlot}
          <svelte:component this={$bannerSlot} />
        {:else}
          <!-- Fallback -->
          <div class="ads">
            <div class="ads__icon">
              <img src="/assets/avatar.png" alt="ads" />
            </div>
            <div style="margin-bottom: 27px;">
              Get a free “STC x Boni Hoodie” now by subscribing as an official
              member of STC
            </div>
            <Button>Learn More</Button>
          </div>
        {/if}

      </slot>
    {/if}

    <!-- Profile avatar -->
    <div class="profile">
      <img src="/assets/avatar.png" alt="avatar" />
      <div class="profile__details">
        <p class="profile__details__name">{name}</p>
        <p class="profile__details__memberType">{memberType}</p>
      </div>
    </div>
  </div>
{/if}
