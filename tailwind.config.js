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
        'bannerSlide': 'bannerSlide 15s ease forwards',
        'bannerSlide_m': 'bannerSlide_m 15s ease forwards',
        'name': 'name 0.3s linear',
      },
      keyframes: {
        'bannerSlide': {
          '0%' : {'background-position': '25% 0%'},
          '100%' : {'background-position': '40% 80%'}
        },
        'bannerSlide_m': {
          '0%' : {'background-position': '20% 50%'},
          '100%' : {'background-position': '50% 80%'}
        },
        'name': {
          '0%' : {'opacity': '0', transform: 'translateY(20px)'},
          '100%' : {'opacity': '1', transform: 'translateY(0px)'}
        },
      },
      boxShadow:{
        'card_shadow': '0px 0px 8px #b1b1b1'
      },
    },
  },
  plugins: [],
}
