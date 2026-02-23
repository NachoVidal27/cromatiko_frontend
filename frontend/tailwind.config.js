/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-heading)"],
        inter: ["var(--font-body)"],
      },
      colors: {
        rogno: {
          cream: "#F2EDDC",
          brownDark: "#594731",
          brown: "#A68365",
          beige: "#D9AE89",
          deep: "#0D0000",
        },
      },
      animation: {
        breath: "breath 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
