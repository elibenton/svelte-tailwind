import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: process.env.VERCEL ? vercel() : netlify(),
		target: '#svelte'
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
