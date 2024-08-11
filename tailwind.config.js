/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',  // Custom breakpoint for screens ≥1920px
        '4xl': '2222px',  // Custom breakpoint for screens ≥2560px
        '5xl': '2350px',
      },
    },
  },
  plugins: [],
};
