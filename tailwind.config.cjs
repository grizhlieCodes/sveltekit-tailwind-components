const colors = require('tailwindcss/colors')

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			transformOrigin: {
				'1': '1px 1px',
			},
			colors: {
				teal: colors.teal,
				orange: colors.orange
			},
			screens: {
				"phone": '375px',
				"phone-wide": '480px',
				"phablet": '560px',
				"tablet-small": '640px',
				"tablet": '768px',
				"tablet-wide": '1024px',
				"desktop": '1248px',
				"desktop-wide": '1440px'
			}
		},
	},

	plugins: []
};

module.exports = config;
