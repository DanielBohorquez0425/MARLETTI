/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'marck': ['Marck Script'],
			'funnelsans': ['Funnel Sans'],
		  },
		dropShadow: {
			'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
			'4xl': [
				'0px 65px 65px rgba(255, 234, 239)',
				'0px 0px 65px rgba(255, 234, 239)'
			]
		}
	},
	plugins: [],
}
