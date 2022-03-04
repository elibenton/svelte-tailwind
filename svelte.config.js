import preprocess from 'svelte-preprocess';
import cloudflare from '@sveltejs/adapter-cloudflare';
import path from 'path';
import { mdsvex } from 'mdsvex';

const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: cloudflare(),
		target: '#svelte',
		vite: {
			optimizeDeps: { include: ['format-fuse.js'] },
			ssr: {
				noExternal: ['format-fuse.js']
			},
			resolve: {
				alias: {
					$images: path.resolve('src/lib/images')
				}
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md']
			// layout: { mds: path.join(dirname, './src/routes/markdown/_layout.svelte') }
		})
	]
};

export default config;
