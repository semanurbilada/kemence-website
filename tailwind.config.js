/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1294px",
      "3xl": "1921px",
      "4xl": "2880px"
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        primary: {
          transparent: "#42566c66",
          bg: "#e2e8f0",
          400: "#73787c",
          900: "#393d40",
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        '3xl': 'inset 0 35px 60px -15px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}