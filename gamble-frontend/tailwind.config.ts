import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'casino-bg':  `url('/images/casino-bg.jpg')`,
          'hero-bg':  `url('/images/hero.jpg')`,
      },
    },
    colors: {
      'bright': '#daffe9',
      'light' : '#f5f7f5',
      'dark': '#000100',
      'gray-100': '#eee',
      'gray-200': '#dcdcdc',
      'gray-700': '#1e1e1e',
      'white': '#ffffff',
      'primary': '#00a826',
      'transparent': 'transparent',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.438rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
    },
  },
  plugins: [],
};
export default config;
