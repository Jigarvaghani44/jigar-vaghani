/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← Add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        card: "#111827",
        border: "#1F2937",
        accent: "#6366F1",
        secondary: "##0A0A0A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
