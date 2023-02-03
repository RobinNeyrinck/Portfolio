/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['index.html', './src/**/*.{html,jsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: ['inter', 'serif'],
			colors: {
				grey: '#aab0ba',
			},
		},
	},
	plugins: [],
};
