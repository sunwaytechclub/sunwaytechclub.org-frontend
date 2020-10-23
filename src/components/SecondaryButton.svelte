<style>
	.button {
		/* Font */
		font-weight: bold;
		font-size: var(--p);

		/* Color */
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
		background-color: var(--yellow);
		color: black;
		border: none;

		/* Layout */
		padding: 16.5px 27.5px;
		border-radius: 20px;
		outline: none;

		/* Effect */
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		transform: perspective(1000px);
	}

	.button:not(:disabled):hover {
		/* Create zoom in effect on button that is not disabled and hovered */
		transform: perspective(1000px) translate3d(0, 0, 43px);
	}

	.button:disabled {
		/* Color */
		background-color: #e0e0e0;
		color: #828282;
	}
</style>

<button on:click class="button" {...$$restProps}>
	<slot />
</button>
