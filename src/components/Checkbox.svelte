<script>
    export let listings = ['Keep me logged in', 'Do not keep me logged in'];
    let checked="";
</script>

<style>
    /*Customizes the label*/
    .checkbox_container{
    display: block;
    position: relative;
    padding-left: 35px;
    padding-top: 0px;
    margin-bottom: 20px;
    cursor: pointer;
    font-size: 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;}

    /*Hides default checkbox*/
    .checkbox_container input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0px;
    width: 0px;
    }

    /*Creates a custom checkbox*/
    .check_mark{
        position: absolute;
        top: 7px;
        left: 5px;
        height: 25px;
        width: 25px;
        background-color: lightgray;
    }

    /*On mouse hover, adds a dark grey background*/
    .checkbox_container:hover input ~.check_mark{
        background-color: darkgrey;
    }
    
    /*When the checkbox is checked, add a light blue background*/
    .checkbox_container input:checked~.check_mark{
        background-color: lightblue;
    }

    /*Creates a checkmark. Hidden when not checked*/
    .check_mark:after{
        content: "";
        position: absolute;
        display: none;
    }
    
    /*Shows the checkmark when checked*/
    .checkbox_container input:checked~.check_mark::after{
        display: block;
    }

    /*Styling for checkmark*/
    .checkbox_container .check_mark:after{
        left: 10px;
        top: 5px;
        width: 5px;
        height: 12px;
        border: solid black;
        border-width: 0px 5px 5px 0px;
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
    }
</style>



<div>
{#each listings as listing}
    <label class="checkbox_container">
    <input type="checkbox" value={listing} bind:group={checked}>
    <span class="check_mark"></span>
    <div>{listing}</div>
    </label>
{/each}
</div>
