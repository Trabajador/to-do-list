import { transformVNodeArgs } from 'vue';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1400px",
      },
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        primaryColor: "hsl(209, 87%, 21%)",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#ddd",
        secondaryColor: "red",
      },
      fontFamily: {
        Poppins: "Poppins",
        Paprika: "Paprika",
        Inria: "Inria Serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
          md: "30px",
        },
      },
    },
  },
  plugins: [],
}

