import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				red: "#ef4444",
				pink: "#f87171",
				violet: "#7928ca",
				hotPink: "#ff0080",
				dark: "#111111",
			},
			animation: {
				fadeInOut: "fadeInOut 12s ease-in-out infinite",
				fadeOutIn: "fadeOutIn 12s ease-in-out infinite",
			},
			keyframes: {
				fadeInOut: {
					"0%, 100%": { opacity: "0" },
					"50%": { opacity: "1" },
				},
				fadeOutIn: {
					"0%, 100%": { color: "#111" },
					"50%": { color: "transparent" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
