// tailwind.config.js
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"dark-orange": "#F3603C",
				"dark-blue": "#242D52",
				"dark-black": "#1D1E25",
				"very-bright-orange": "#FFF0EC",
			},
		},
	},
	plugins: [],
}
