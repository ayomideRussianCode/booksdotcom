/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        font1: ["Poppins", "sans-serif"],
        font2: ["Akaya Telivigala", "system-ui"],
        font3: ["Lexend", "sans-serif"],
      },
      colors: {
        customWhite: "#fff",
        customBlue: "#007AFF",
        customBlack: "#000000",
        customAsh:  "#828282",
        customColor1: "#EBEBEB"
      },
    },
  },
  plugins: [],
};
