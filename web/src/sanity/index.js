import imageUrlBuilder from '@sanity/image-url';

export const client = {
	projectId: import.meta.env.SANITY_PROJECT_ID,
	dataset: import.meta.env.SANITY_DATASET,
	apiVersion: '2021-03-25',
	useCdn: import.meta.env.MODE === 'production'
};

export function sanityGraphqlQuery(query) {
	return `${import.meta.env.SANITY_GRAPHQL_URL}?query=${query}`;
}

export function sanityImage(source) {
	return imageUrlBuilder(client).image(source);
}