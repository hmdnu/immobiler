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
        luxury: "url('src/assets/images/luxury.png')",
        property: "url('src/assets/images/bg-property.svg')",
        footer: "url('src/assets/images/bg-footer.svg')",
        "house-footer": "url('src/assets/images/bg-contact.png')",
      },
    },

    plugins: [],
  },
};
