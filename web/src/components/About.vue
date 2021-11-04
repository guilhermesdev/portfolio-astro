<template>
	<section>
		<h2>Sobre mim</h2>
		<SanityBlocks :blocks="about" />
	</section>
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import { sanityFetch } from '@/sanity';

export default {
	components: { SanityBlocks },
	async setup() {
		const query = `*[_type == 'siteSettings'] { about }[0]`;

		const response = await sanityFetch(query);

		const { result: { about } } = await response.json();

		return { about };
	}
}
</script>

<style lang="scss" scoped>
	section {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
	}
</style>