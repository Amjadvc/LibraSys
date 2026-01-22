/** @type {import('tailwindcss').Config} */
const tailWindConfig = {
  darkMode: "class", // important for future dark theme
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#363062",
      //   secondary: "#818FB4",

      //   background: "#F3EEE6",
      //   surface: "#FFFFFF",
      //   border: "#DED6C9",

      //   text: {
      //     DEFAULT: "#1F2937",
      //     muted: "#6B7280",
      //   },

      //   dark: {
      //     background: "#0F172A",
      //     surface: "#1E293B",
      //     border: "#334155",
      //     text: "#E5E7EB",
      //   },
      // },
      colors: {
        brand: "#363062",
        accent: "#7C8BC6",

        background: "#F1EFE9",
        sidebar: "#FBFAF7",
        surface: "#FFFFFF",
        border: "#E4E1D8",

        text: {
          DEFAULT: "#2B2E3A",
          muted: "#6B7280",
        },

        dark: {
          background: "#0E1320",
          surface: "#161C2D",
          border: "#2A3145",
          text: "#E6E8EF",
          muted: "#9CA3AF",
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

//icons #363062
