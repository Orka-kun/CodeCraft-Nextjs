/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bangla: ["Noto Serif Bengali", "serif"],
        LiNoirrit : ["Li Ador Noirrit", "sans-serif"],
        EBGaramond: ["EB Garamond", 'serif'],
        GOBatang: ["Gowun Batang", 'serif'],
        Nunito: ["Nunito", 'sans-serif'],
        Poppins: ["Poppins", 'sans-serif'],
      },
      fontSize: {
        'xxs': '0.7rem',
        'xxsm': '0.6rem',
        'xxxsm': '0.5rem',
      },
      maxWidth: {
        '22': '5.5rem', // Custom max-width between 5rem and 6rem
      },
      
    },
  },
  plugins: [],
};
