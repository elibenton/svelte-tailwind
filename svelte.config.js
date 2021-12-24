import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
// import vercel from '@sveltejs/adapter-vercel';
// import cloudflare from '@sveltejs/adapter-cloudflare';
import Icons from 'unplugin-icons/vite';
// import { imagetools } from 'vite-imagetools';
import path from 'path';
import { mdsvex } from 'mdsvex';
// import { fileURLToPath } from 'url';

// const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: netlify(),
		target: '#svelte',
		vite: {
			optimizeDeps: { include: ['format-fuse.js'] },
			ssr: {
				noExternal: ['format-fuse.js']
			},
			plugins: [
				// Icons({
				// 	compiler: 'svelte',
				// 	autoInstall: true
				// })
				// imagetools()
			],
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
