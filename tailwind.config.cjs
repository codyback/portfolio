/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					900: '#17223B',
					700: '#263859',
					600: '#6B778D',
					400: '#FF6768',
				},
				brands: {
					linkedin: '#0077b5',
					github: '#333',
					youtube: '#ff0000',
					twitter: '#1da1f2',
					instagram: '#f56040',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
