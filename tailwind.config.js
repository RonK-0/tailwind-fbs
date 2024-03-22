/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        'md': '768px',
        // 'lg': '1024px',
        'lg': '992px',
        // 'xl': '1280px',
        'xl': '1200px',
        // '2xl': '1536px',
      },
      backgroundImage:{
        logo_blk: "url('../dist/img/logo-fbs.png')",
        logo_wht: "url('../dist/img/logo-fbs-wht.png')",
        banner_bg: "url('../dist/img/bg3.svg')"
      },
      colors:{
        dark: "#2b2b2b",
        light: "#fff",
        lgray: "#f5f5f5",
        gray_alt: "#b1b1b1",
        magentah: "#6a103f",
      },
      fontFamily: {
        'text-nm': ["Montserrat", "sans-serif"],
        'text-xb': ["Montserrat Extrabold", "sans-serif"],
      },
      fontSize: {
      },
      listStyleType: {
      //   none: 'none',
        circle: 'circle',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      },
    },
  },
  plugins: [],
}