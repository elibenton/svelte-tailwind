import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import vercel from '@sveltejs/adapter-vercel';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';

const config = {
	kit: {
		adapter: process.env.VERCEL ? vercel() : netlify(),
		target: '#svelte',
		vite: {
			optimizeDeps: { include: ['format-fuse.js'] },
			ssr: {
				noExternal: ['format-fuse.js']
			},

			plugins: [
				Icons({
					compiler: 'svelte',
					autoInstall: true
				}),
				imagetools()
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
		})
	]
};

export default config;
