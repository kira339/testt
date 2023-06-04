/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Gray
        primaryGray: "#475569",
        // Orange
        primaryOrange: "#f59e0b",
        // Blue
        primaryBlue: "#3b82f6",
        // White
        primaryWhite: "#f8fafc",
        // Light gray
        lightGray: "#9ca3af",
        // Black
        primaryBlack: "#020617",
      },
    },
  },
  plugins: [],
};
