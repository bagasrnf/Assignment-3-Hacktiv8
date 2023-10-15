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
        black: "#1A120B",
        brown: "#3C2A21",
        beige: "#D5CEA3",
        grey: "#E5E5CB",
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
