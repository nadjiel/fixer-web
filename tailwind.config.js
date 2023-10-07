/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#B3261E",
          ligth: "#F8D4D4"
        }, // Vermelho
        secondary: {
          100: "#FFFFFF",
          200: "#F4F8FC",
          300: "#E0E3E7",
          400: "#AFB4BA",
          500: "#666666",
          600: "#1F1F1F",
        },
        success:  {
          default: "#1FA161",
          ligth: "#CAF4E0"
        },
        alert: {
          default: "#C3A41E",
          ligth: "#F8EBCA"
        }
      },
      fontFamily: {
        fira: ["Fira Sans"],
      },
    },
  },
  plugins: [],
};
