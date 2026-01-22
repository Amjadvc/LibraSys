/** @type {import('tailwindcss').Config} */
const tailWindConfig = {
  darkMode: "class", // important for future dark theme
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#363062",
        secondary: "#818FB4",

        background: "#F3EEE6",
        surface: "#FFFFFF",
        border: "#DED6C9",

        text: {
          DEFAULT: "#1F2937",
          muted: "#6B7280",
        },

        dark: {
          background: "#0F172A",
          surface: "#1E293B",
          border: "#334155",
          text: "#E5E7EB",
        },
      },
      fontFamily: {
        logo: ["Kaushan Script", "cursive"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailWindConfig;
