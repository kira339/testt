module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryGray: "#F3F4F6",
        primaryBlack: "#111827",
        primaryWhite: "#FFFFFF",
        primaryBlue: "#3B82F6",
        lightGray: "#D1D5DB",
        primaryOrange: "#F97316",
        primaryGrayLight: "#D3DCE6",
      },
      borderRadius: {
        "2xl": "2rem",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
