/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-saffran": "#F4D03F",
        "yellow-bright": "#F9F871",
      },
    },
  },
  plugins: [],
};
