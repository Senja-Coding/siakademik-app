/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hijau-guys": "#008f11",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      lato: ["Lato"],
      garamond: ["Garamond"],
    },
  },
  plugins: [],
};
