/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "767.98px" },
      sm: "400px",
      md: "768px",
      mdOnly: { min: "768px", max: "1279.98px" },
      lg: "1280px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        bgMain: "#020F08",
        bgMobile: "#010A05",
      },
    },
  },
  plugins: [],
};
