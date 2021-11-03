<template>
	<div class="wrapper">
		<h3>{{project.title}}</h3>

		<img
			:src="sanityImage(project.mainImage.asset.url)
				.width(300)
				.height(185)
				.url()"
			:alt="project.title"
		/>

		<p>{{ project.excerpt }}</p>

		<ul>
			<li
				v-for="category in project.categories"
				:key="category._id"
			>
				<span
					:style="{
						'background-color': category.color.hex,
						color: category.textColor.hex	|| '#fff'
					}"
				>
					{{ category.title }}
				</span>
			</li>
		</ul>

		<div class="button-wrapper">
			<Button
				v-if="project.repo"
				color="#22262C"
				tag="a"
				:href="project.repo"
				target="_blank"
			>Repositório</Button>
			<Button
				v-if="project.preview"
				tag="a"
				:href="project.preview"
				target="_blank"
			>Preview</Button>
		</div>
	</div>
</template>

<script>
	import { sanityImage } from '@/sanity';

	import Button from '@/components/Button.vue';

	export default {
		props: { project: Object },
		components: {
			Button
		},
		methods: {
			sanityImage
		}
	}
</script>

<style lang="scss" scoped>
img {
	width: 100%;
	border-radius: 10px;
	border: 2px solid var(--color-text);
}

ul {
	list-style: none;

	display: flex;
	flex-wrap: wrap;
	gap: 5px;

	span {
		display: inline-block;
		padding: 3px;
		border-radius: 5px;
		color: #fff;
	}
}

.wrapper {
	background-color: var(--color-bg2);
	padding: 1rem;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.button-wrapper {
	display: flex;
	gap: .5rem;

	> * {
		flex: 1;
	}
}
</style>