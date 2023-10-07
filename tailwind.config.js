/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B3261E",
        secondary: {
          default: "#EAF1F9",
          ligth: "#1F1F1F0D",
          neutral: "#F4F8FC",
          dark: "#D8E0F3",
        },
      },
      fontFamily: {
        fira: ["Fira Sans"],
      },
    },
  },
  plugins: [],
};
