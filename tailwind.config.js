/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: "#0F0F0F",
      },
      backgroundImage: {
        "home-base": "url('src/assets/images/bg-home.jpg')",
        "home-masked": "url('src/assets/images/bg-home-masked.png')",
      },
    },

    plugins: [],
  },
};
