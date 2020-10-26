<style>
  input {
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

    /* Effect */
  }
  ::placeholder {
    color: #bdbdbd;
  }
  :-ms-input-placeholder {
    color: #bdbdbd;
  }
  ::-ms-input-placeholder {
    color: #bdbdbd;
  }
  img {
    position: absolute;
  }
  .wrapper {
    position: relative;
  }
</style>

<div class="wrapper">
  <img src="/assets/search.svg" alt="search" on:click />
  <input type="text" placeholder="Looking For An Event" {...$$restProps} />
</div>
