// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // Gray
//         primaryGray: "#475569",
//         // Orange
//         primaryOrange: "#f59e0b",
//         // Blue
//         primaryBlue: "#3b82f6",
//         // White
//         primaryWhite: "#f8fafc",
//         // Light gray
//         lightGray: "#9ca3af",
//         // Black
//         primaryBlack: "#020617",
//       },
//     },
//   },
//   plugins: [],
// };

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
        primaryWhite: "#FFFFFF",
        primaryGray: "#D1D5DB",
        lightGray: "#D3DCE6",
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
