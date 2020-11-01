<script>
  export let label = "Name";
  export let labelStyle = "width: 420px";
</script>

<style>
  .input__label {
    /* Layout */
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    /* Font */
    font-size: calc(var(--p2) + 2px);
    font-family: var(--title);
    font-weight: 500;
    color: #f2f2f2;
  }
  .input__field {
    /* Layout */
    border: 2px solid transparent;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    padding: 15px 25px;
    margin-top: 13px;
    outline: none;

    /* Font */
    font-size: calc(var(--p2) + 2px);
    font-family: var(--title);
    font-weight: 500;
  }
  .input__field:focus {
    border: 2px solid var(--purple);
  }
</style>

<label class="input__label" style={labelStyle}>
  {label}
  <input class="input__field" {...$$restProps} />
</label>
