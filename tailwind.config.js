/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
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
