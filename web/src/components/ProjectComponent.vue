<template>
	<div>
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
					:style="`background-color: ${category.color.hex};`"
				>
					{{ category.title }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import { sanityImage } from '@/sanity';

	export default {
		props: { project: Object },
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
	gap: 5px;

	span {
		padding: 5px;
		border-radius: 5px;
		color: #fff;
	}
}

div {
	background-color: var(--color-bg2);
	padding: 1rem;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>