// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-fundo': "linear-gradient(#00000050, #00000050), url('/fundo.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
