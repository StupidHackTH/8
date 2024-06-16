/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				workbench: ["Workbench", "sans-serif"],
				plex: ["IBM Plex Sans Thai Looped"],
			},
		},
	},
	plugins: [],
};
