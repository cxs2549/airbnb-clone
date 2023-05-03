/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 3px 10px rgba(0,0,0,0.1)",
      },
      fontFamily: {
        sarabun: ["Sarabun", "sans-serif"],
      },
      fontWeight: {
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
      colors: {
        muted: 'rgb(113, 113, 113)',
        black: "#222222"
      },
      screens: {
        sm: '550px',
        md: '778px',
        lg: '950px',
        xl: '1128px',
        '2xl': '1440px',
        '3xl': '1640px',
        '4xl': '1880px'
      }
    },
  },
  plugins: [],
}
