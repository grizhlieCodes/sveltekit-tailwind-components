const colors = require('tailwindcss/colors')

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				orange: colors.orange
			},
		}
	},

	plugins: []
};

module.exports = config;
