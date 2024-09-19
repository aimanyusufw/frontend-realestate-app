/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      playFair: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        "dark-green": "#147535",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
