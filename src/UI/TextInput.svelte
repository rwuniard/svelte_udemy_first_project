<script>
    export let controlType;
    export let id;
    export let label;
    export let rows;
    export let value;
</script>

<div class="form-control">
    <label for="description">{label}</label>
    {#if controlType === 'textarea'}
        <!-- // bind:value={text} won't work when we are using in a component inside another component-->
        <!-- <textarea rows="3" {id} bind:value={text} /> -->
        <!-- The on:input will listen to input from the parent component -->
        <textarea {rows} {id} {value} on:input />
    {:else}
        <!-- Same thing as above, the bind:value won't work -->
        <!-- <input type="text" {id} bind:value={text} /> -->
        <!-- The on:input will listen to input from the parent component -->
        <input type={controlType} {id} {value} on:input />
    {/if}
</div>

<style>
    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        border: none;
        border-bottom: 2px solid #ccc;
        border-radius: 3px 3px 0 0;
        background: white;
        padding: 0.15rem 0.25rem;
        transition: border-color 0.1s ease-out;
    }

    input:focus,
    textarea:focus {
        border-color: #e40763;
        outline: none;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        width: 100%;
    }

    .form-control {
        padding: 0.5rem 0;
        width: 100%;
        margin: 0.25rem 0;
    }
</style>
