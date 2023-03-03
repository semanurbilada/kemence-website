/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "983px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1294px",
      "3xl": "1921px",
      "4xl": "2880px"
    },
    extend: {
      backgroundImage: {
        'slide-1' : "url('/public/slide1.jpg')",
        'slide-2' : "url('/public/slide2.jpg')",
        'slide-3' : "url('/public/slide3.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        primary: {
          transparent: "#42566c66",
          bg: "#e2e8f0", // general bg
          default: "#9ca3af", //navbar home bg
          400: "#73787c",
          900: "#393d40",
        },
        secondary: {
          200: "#e2e8f0", // navbar info bg
          400: "#94a3b8", // navbar middle bg
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        '3xl': 'inset 0 35px 60px -15px rgba(0, 0, 0, 1)',
      },
      spacing: {
        custom: "125px",
      }
    },
  },
  plugins: [],
}