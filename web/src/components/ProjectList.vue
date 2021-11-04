<template>
	<section id="portfolio">
		<h2>Portfolio</h2>

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
import { sanityGraphqlQuery } from '@/sanity';

import ProjectComponent from '@/components/ProjectComponent.vue';

export default {
	components: { ProjectComponent },
	async setup() {
		const query = `{
			allProject {
				_id,
				title,
				slug{current},
				excerpt,
				repo,
				preview,
				categories {
					_id,
					title,
					color {
						hex
					},
					textColor {
						hex
					}
				},
				mainImage {
					asset {   
						url
					}
				}
			}
		}`;

		const response = await fetch(sanityGraphqlQuery(query));
		const { data } = await response.json();

		const projects = data.allProject;

		return { projects };
	}
}
</script>

<style lang="scss" scoped>


ul {
	list-style: none;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-template-rows: 1fr;
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