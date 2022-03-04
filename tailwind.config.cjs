const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media', // class
	variants: {
		extend: {
			mixBlendMode: ['hover', 'group-hover']
		}
	},
	theme: {
		extend: {
			height: {
				'45vh': '45vh'
			},
			fontFamily: {
				sans: ['Mier B', 'sans-serif']
			},
			colors: {
				beige: { DEFAULT: '#fff8ef', light: '', dark: '' }
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in forwards'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
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
	plugins: [
		plugin(function ({ addUtilities }) {
			const extendUnderline = {
				'.underline': {
					textDecoration: 'underline',
					textDecorationColor: 'gold'
				}
			};
			addUtilities(extendUnderline);
		})
	]
};

module.exports = config;
