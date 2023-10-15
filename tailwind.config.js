/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#113946",
        brown: "#BCA37F",
        beige: "#EAD7BB",
        cream: "#FFF2D8",
      },
      sreens: {
        "2xl": "1320px",
      },
      animation: {
        "bounce-slow": "bounce 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
