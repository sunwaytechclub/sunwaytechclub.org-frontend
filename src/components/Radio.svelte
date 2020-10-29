<!-- let list = ['a','b','c','d']
<Radio items = {list} custom = true fontSize=20px ></Radio> -->

<script>
    export let items = ['a','b','c'];
    let selected = "Nothing";
    export let fontSize;
    // export let custom = true;
    $: console.log('Changed selected:',selected)
    $: console.log('Updated options:',items)

    // if (custom){
    //     let input = document.getElementsByTagName("input");
    //     input.className = "radio__items__label__input__custom"
    // }else{
    //     // document.getElementsByTagName("input").className = "radio__items__label__input";
    // }
    
</script>
<style>
    .radio__items {
        display:flex;
        flex-direction: column;
        margin: 10px;
        justify-content: space-evenly;
        
    }

    .radio__items__label{
        padding: 10px;
        font-size: var(--p2);  
        display: flex;
        justify-content: left
    }

    /* For default button */
    /* .radio__items__label input{
        margin-right: 5px;
        cursor: pointer;
    } */
    .radio__items__label div {
        margin-left: 30px;
    }

    /* Hide the browser's default radio button */
    .radio__items__label input {
        opacity: 0;
        cursor: pointer; 
        position: absolute;  
        display: block;
        width: 20%;
    }

    /* Custom radio button */
    .radio__items__label__span {
        position: absolute;
        height: 15px;
        width: 15px;
        background-color:white;
        border: 3px solid lightgray;
        border-radius: 50%;
        cursor: pointer;

    }

    /* On mouse-over, add grey background colour */
    .radio__items__label:hover input ~ .radio__items__label__span {
        background-color: white;
        border: 3px solid #43daa0;
    }

    /* When the radio button is checked, add a blue background */
    .radio__items__label input:checked ~ .radio__items__label__span{
        background-color: white;
        border: 3px solid #1fb57b;
        
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .radio__items__label__span::after {
        content: "";
        position: absolute;
        display: none;
        /* top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white; */
    }

    /* Show the indicator (dot/circle) when checked */
    .radio__items__label input:checked ~ .radio__items__label__span::after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .radio__items__label .radio__items__label__span::after{
        /* top: 9px;
        left: 9px; */
        width: 3px;
        height: 3px;
        position: absolute;
        border-radius: 50%;
        background: #1fb57b;
        padding: 6px 0px 0px 6px;
    }    
</style>

<div class="radio__items">
{#each items as item}
    <label class="radio__items__label" style="font-size:{fontSize}px">
        <input type="radio" value={item} bind:group={selected} >
        <span class="radio__items__label__span"></span>
        <div>{item}</div>
    </label>
{/each}
</div>

