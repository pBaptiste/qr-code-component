/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'card': '0px 25px 25px 0px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [],
}
