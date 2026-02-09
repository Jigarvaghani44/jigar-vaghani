// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        bronze: "#8B7355",
        gold: "#D4AF37",
        "soft-black": "#1A1A1A",
        "soft-white": "#FAFAFA",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "-apple-system", "sans-serif"],
        mono: ['"SF Mono"', "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "pulse-soft": "pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
