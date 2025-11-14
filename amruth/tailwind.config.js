/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        surface: {
          light: "#f8fafc",
          dark: "#1e293b",
        },
        text: {
          light: "#0f172a",
          dark: "#f8fafc",
        },
        subtext: {
          light: "#475569",
          dark: "#94a3b8",
        },
        border: {
          light: "#e2e8f0",
          dark: "#334155",
        },
      },
    },
  },
  plugins: [],
};
