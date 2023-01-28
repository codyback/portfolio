<script>
	export let open = false;
</script>

<button
	class="sm:hidden flex items-center justify-items-end m-auto h-10 w-fit hover:text-gray-700 cursor-pointer border-none focus:outline-none"
	class:open
	on:click={() => (open = !open)}
>
	<svg
		width="28"
		height="24"
	>
		<line
			id="top"
			x1="0"
			y1="3"
			x2="28"
			y2="3"
		/>
		<line
			id="middle"
			x1="0"
			y1="11"
			x2="28"
			y2="11"
		/>
		<line
			id="bottom"
			x1="0"
			y1="19"
			x2="28"
			y2="19"
		/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.9);
	}

	.open #top {
		transform: translate(5px, 0px) rotate(45deg);
	}

	.open #middle {
		opacity: 0;
	}

	.open #bottom {
		transform: translate(-11px, 9px) rotate(-45deg);
	}
</style>
