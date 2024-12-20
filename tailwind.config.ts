import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'resize-opacity': 'resize-opacity 5s infinite',
      },
      keyframes: {
        'resize-opacity': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.9',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1',
            boxShadow: '0px 3px 15px #60A5FAB3'
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        xs: '1px',
      },
    },
  },
  plugins: [],
};
export default config;
