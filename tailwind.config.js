/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#181b2b",
        darkBg: "#121522",
        light: "#ffffff",
        primary: "#3b4961",
        secondary: "#48566e",
        third: "#93a2b7",
        "primary-light": "#f0f3f7",
        "secondary-light": "#ffffff",
        "primary-dark": "#121522",
        "secondary-dark": "#181b2b",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1532px",
    },
  },
  plugins: [],
};
