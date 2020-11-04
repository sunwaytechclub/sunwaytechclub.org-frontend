<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let columnGap = 20;
  export let numDisplayItem = 4;

  let left = false;
  let right = true;
  let itemWidth;
  let numItem;
  let wrapperWidth;
  let wrapper;
  let content;
  let navigator;
  let hiddenItem = 0;
  let counter = 0;

  onMount(() => {
    // Get the total number of items
    numItem = content.childElementCount;

    // Get the width of item
    itemWidth = content.children[0].clientWidth;

    // Add styling to the grid template of content container
    content.style.gridTemplateColumns = `repeat(${numItem}, 1fr)`;

    // Set the width of wrapper
    wrapperWidth =
      itemWidth * numDisplayItem + columnGap * (numDisplayItem - 1);
    wrapper.style.width = `${wrapperWidth}px`;

    // Set the number of hidden items
    hiddenItem = numItem - numDisplayItem;

    // If number of item less than desired number of display item, hide the navigator
    if (numItem <= numDisplayItem) {
      navigator.style.display = "none";
    }
  });

  function scrollToRight() {
    wrapper.scrollBy({ left: itemWidth + columnGap, behavior: "smooth" });
    left = true;
    counter += 1;

    if (counter <= hiddenItem && counter === hiddenItem) {
      right = false;
      return;
    }
  }

  function scrollToLeft() {
    wrapper.scrollBy({
      left: -(itemWidth + columnGap),
      top: 0,
      behavior: "smooth"
    });
    right = true;
    counter -= 1;

    if (counter === 0) {
      left = false;
      return;
    }
  }
</script>

<style>
  /* Wrapper */
  .wrapper {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    max-width: 1000px;
    height: 100%;
  }
  .wrapper::-webkit-scrollbar {
    display: none;
  }
  /* Content */
  .content {
    display: grid;
    column-gap: 20px;
  }

  /* Slider */
  .slide__left {
    display: grid;
    place-items: center;
    position: fixed;
    left: 0;
    cursor: pointer;
    min-width: 100px;
    max-width: 150px;
    height: 150px;
    background-image: linear-gradient(
      to right,
      rgb(255, 255, 255),
      rgba(255, 0, 0, 0)
    );
  }
  .slide__left__icon {
    transform: rotate(180deg);
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  .slide__right {
    display: grid;
    place-items: center;
    position: fixed;
    right: 0;
    cursor: pointer;
    min-width: 100px;
    max-width: 150px;
    height: 150px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      rgb(255, 255, 255)
    );
  }
  .slide__right__icon {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
</style>

<div class="wrapper" bind:this={wrapper}>
  <div class="content" bind:this={content} id="contentDiv">
    <slot />
  </div>
  <div class="navigator" bind:this={navigator}>
    {#if left}
      <div
        class="slide__left"
        on:click={scrollToLeft}
        transition:fade={{ duration: 150 }}>
        <img
          src="/assets/arrow_without_tail_grey.svg"
          class="slide__left__icon"
          alt="left arrow" />
      </div>
    {/if}
    {#if right}
      <div
        class="slide__right"
        on:click={scrollToRight}
        transition:fade={{ duration: 150 }}>
        <img
          src="/assets/arrow_without_tail_grey.svg"
          class="slide__right__icon"
          alt="right arrow" />
      </div>
    {/if}
  </div>

</div>
