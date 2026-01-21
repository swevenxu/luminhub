import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Blue variant classes for Button component
    'from-blue-500/20',
    'to-blue-600/20',
    'from-blue-500/30',
    'to-blue-600/30',
    'border-blue-400/30',
    'border-blue-400/40',
    'hover:from-blue-500/30',
    'hover:to-blue-600/30',
    'hover:border-blue-400/40',
    'bg-blue-300/40',
    'bg-blue-400/30',
    // Purple variant classes
    'from-purple-500/20',
    'to-purple-600/20',
    'from-purple-500/30',
    'to-purple-600/30',
    'hover:from-purple-500/30',
    'hover:to-purple-600/30',
    'bg-purple-300/40',
    'bg-purple-400/30',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
