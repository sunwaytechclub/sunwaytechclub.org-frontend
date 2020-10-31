<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import { bubble, listen, current_component } from "svelte/internal";
  export let name = "Panel 1";
  export let expand = false;
  export let disabled = false;
  export let rotate = true;
  export let group = "";

  const events = getEventsAction(current_component);
  const dispatch = createEventDispatcher();

  function getEventsAction(component) {
    return node => {
      const events = Object.keys(component.$$.callbacks);
      const listeners = [];

      events.forEach(event =>
        listeners.push(listen(node, event, e => bubble(component, e)))
      );

      return {
        destroy: () => {
          listeners.forEach(listener => listener());
        }
      };
    };
  }

  $: if (expand) {
    group = name;
  }
  $: active = group === name;
  $: dispatch("change", { expanded: active, name });

  function onclick(e) {
    group = group === name ? "" : name;
  }
</script>

<style>
  .panel {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  .panel:first-child {
    border-top: none;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  .panel:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
  .panel__title {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    min-height: 48px;
    cursor: pointer;
    background: none;
    color: inherit;
    font-size: 16px;
    font-family: var(--title);
    font-weight: 600;
    line-height: 1;
    border: none;
    margin: 0;
    padding: 10px 22px;
    text-align: left;
    outline: none;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  .panel__content {
    overflow: auto;
    margin: 0;
    padding: 15px 16px;
  }
  .panel__disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  .active .rotate .icon {
    transform: rotate(-180deg);
  }
  .panel .icon {
    transition: 0.25s linear;
  }
</style>

<div class="panel" class:active use:events>
  <div class={disabled ? 'panel__disabled' : ''}>

    <button class="panel__title" class:rotate {disabled} on:click={onclick}>
      <span style="flex: 1; line-height: 24px;">{name}</span>
      <slot name="icon">
        <img
          src="/assets/arrow_without_tail_down.svg"
          alt="plus"
          class="icon" />
      </slot>
    </button>

    {#if active}
      <div class="panel__content" transition:slide>
        <slot />
      </div>
    {/if}

  </div>
</div>
