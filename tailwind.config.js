/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        cream: "#F8F7F4",
        navy: "#0D1117",
        "navy-soft": "#1C2333",
        accent: "#2563EB",
        "accent-light": "#EFF6FF",
        muted: "#6B7280",
        border: "#E5E7EB",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
