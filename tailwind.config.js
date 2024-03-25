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
        banner_bg: "url('../dist/img/bg3.svg')",
        offer_bg: "url('../dist/img/home/what-we-offer-bg-scaled.jpg')",
        cta: "radial-gradient(circle farthest-side at center bottom, #e81a86, #6a103f 125%)"
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
      backgroundSize: {
        '400%': '400% 400%'
      },
      animation: {
        'bannerSlide': 'bannerSlide 10s ease forwards',
      },
      keyframes: {
        'bannerSlide': {
          '0%' : {'background-position': '25% 0%'},
          '100%' : {'background-position': '40% 80%'}
        }
      },

    },
  },
  plugins: [],
}
