import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eduo: {
          blue:    "#00AEEF",
          pink:    "#EC008C",
          gray:    "#6E6E6E",
          lime:    "#C8E32B",
          cyan:    "#00E5C8",
          cobalt:  "#0D00FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-quicksand)", "Quicksand", "sans-serif"],
      },
      borderRadius: {
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
