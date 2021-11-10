import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
