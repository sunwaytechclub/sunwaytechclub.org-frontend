<script>
  import { createEventDispatcher, onMount } from "svelte";
  import FlexSearch from "flexsearch";

  export let data = [
    {
      _id: "00001",
      eventName: "Excel Workshop"
    },
    {
      _id: "00002",
      eventName: "Python Workshop"
    },
    {
      _id: "00003",
      eventName: "HacktoberFest 2020"
    }
  ];
  export let fields = ["eventName"];
  export let id_field = "_id";
  export let placeholder = "Looking for an event";

  const dispatch = createEventDispatcher();
  let index;
  let inputElement;

  onMount(() => {
    index = new FlexSearch({
      doc: {
        id: id_field,
        field: fields
      }
    }); // to see more: https://github.com/nextapps-de/flexsearch#flexsearch.create
    index.add(data);
  });

  async function search(e) {
    let query = [];
    let keywords = inputElement.value.split(",");
    for (let keyword of keywords) {
      for (let field of fields) {
        query = [
          ...query,
          {
            field: field,
            query: keyword,
            bool: "or"
          }
        ];
      }
    }
    let res = await index.search(query);
    dispatch("message", {
      results: res,
      value: e.detail.value
    });
  }
</script>

<style>
  .input {
    /* Font */
    font-family: var(--title);
    text-align: right;
    font-size: var(--p);

    /* Color */

    /* Layout */
    border: none;
    outline: none;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 15px;
    padding-left: 25px;
    min-width: 285px;
  }

  /* Input Placeholder */
  ::placeholder {
    color: #bdbdbd;
  }
  :-ms-input-placeholder {
    color: #bdbdbd;
  }
  ::-ms-input-placeholder {
    color: #bdbdbd;
  }

  /* Search Icon */
  .search__icon {
    position: absolute;
  }
</style>

<img src="/assets/search.svg" class="search__icon" alt="search" />
<input
  list="datalist"
  class="input"
  on:keyup={search}
  bind:this={inputElement}
  {placeholder}
  {...$$restProps} />
