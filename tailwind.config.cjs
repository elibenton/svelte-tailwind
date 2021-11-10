const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Mier B', 'sans-serif']
			},
			colors: {
				beige: '#fff8ef'
			}
		}
	},
	minHeight: {
		0: '0',
		'1/4': '25%',
		'1/2': '50%',
		'3/4': '75%',
		full: '100%'
	},
	plugins: []
};

module.exports = config;
