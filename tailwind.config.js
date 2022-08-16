/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'theme-blue': '#1c222d',
				'theme-blue-light': '#2a3343',
				'theme-cream': '#e0cece'
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '100%' },
					'50%': { opacity: '0%' }
				}
			},
			animation: {
				blink: 'blink 1.1s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
