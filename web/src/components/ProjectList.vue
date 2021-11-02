<template>
	<section id="portfolio">
		<ul>
			<li
				v-for="project in projects"
				:key="project._id"
			>
				<ProjectComponent :project="project" />
			</li>
		</ul>
	</section>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent.vue';

export default {
	components: { ProjectComponent },
	props: { projects: Object }
}
</script>

<style lang="scss" scoped>

ul {
	list-style: none;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-rows: 100%;
	gap: 1rem;
}

li {
	display: block;
	height: 100%;

	div {
		height: 100%;
	}
}

</style>