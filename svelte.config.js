import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

const config = {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
		// vite: {
		// 	resolve: {
		// 		alias: {
		// 			$utils: path.resolve('./static/fonts')
		// 		}
		// 	}
		// }
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
