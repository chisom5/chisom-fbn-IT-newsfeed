/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
      },
      colors: {
        brand: {
          primary: "#03009E",
          secondary: "#4B48FF",
          gray: "#C4C4C4",
          gray_1: "#7D7D81",
          article_text: "#747373",
        },
      },
    },
  },
  plugins: [],
};
