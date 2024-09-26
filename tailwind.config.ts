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
        'hk-blue': {
          200: '#2589FE',
          300: '#0070F3',
          600: '#232f3e',
        },
        "hkred" : "#ed1a2e",
        'hkcyan' : '#47b5e0',
        'hkivory' : '#d9e0d4',
        'hkdarkblue' : '#1d4681',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
