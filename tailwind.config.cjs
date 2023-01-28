/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
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
