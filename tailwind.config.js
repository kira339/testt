module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: ["hover:bg-primaryOrange"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FA8300",
        lightGray: "#E0E0E0",
        gray: "#5C5C5C",
        black: "#000000",
        blue: "#2B49F5",
        dashboardBackground: "#F4D6A1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
