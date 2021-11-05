<template>
	<component
		:is="tag"
		class="button"
		:class="type"
		:style="{
			'background-color': color,
			color: textColor
		}"
	>
		<slot	/>
	</component>
</template>

<script>
	export default {
		props: {
			tag: {
				type: String,
				default: 'button'
			},
			type: {
				type: String,
				default: 'primary'
			},
			color: String,
			textColor: String
		}
	}
</script>

<style lang="scss">
.button {
	display: flex;
	justify-content: center;
	align-items: center;

	padding: .5rem 1rem;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 5px;
	border: 0;

	cursor: pointer;
	transition: .3s;

	&:hover {
		filter: brightness(.9);
	}
}

.primary {
	background-color: var(--color-accent);
	color: var(--color-text);
}
</style>