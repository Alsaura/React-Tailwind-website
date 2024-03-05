/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      plusJak: ["Plus Jakarta Sans", "Sans"],
    },
    lineHeight: {
      extra: "70px",
      72: "70px",
    },
  },
  plugins: [],
};
