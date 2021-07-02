module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '960px',
      'xl': '1072px'
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.1: '1px',
      0.5: '0.5rem',
      0.8: '0.8rem',
      1: '1rem',
      1.2: '1.2rem',
      1.5: '1.5rem',
      1.6: '1.6rem',
      1.8: '1.8rem',
      2: '2rem',
      2.2: '2.2rem',
      2.5: '2.5rem',
      3: '3rem',
      3.2: '3.2rem',
      3.3: '3.3rem',
      3.5: '3.5rem',
      4: '4rem',
      4.5: '4.5rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
      10: '10rem',
      11: '11rem',
      12: '12rem',
      14: '14rem',
      15: '15rem',
      16: '16rem',
      20: '20rem',
      24: '24rem',
      25: '25rem',
      28: '28rem',
      32: '32rem',
      36: '36rem',
      40: '40rem',
      44: '44rem',
      48: '48rem',
      52: '52rem',
      56: '56rem',
      60: '60rem',
      64: '64rem',
      68: '68rem',
      72: '72rem',
      80: '80rem',
      96: '96rem',
    },
    maxWidth: {
      68: '68rem',
     },
    colors: {
      modalOverlay: '#02132B',
      transparent: 'transparent',
      black: {
        10: '#E6E7EA',
        20: '#CCD0D5',
        40: '#9AA1AA',
        50: '#808995',
        60: '#677280',
        70: '#4E5A6B',
        80: '#344356',
        90: '#1B2B41',
        DEFAULT: '#000',
      },
      white: '#fff',
      zircon: '#FBFCFF',
      blue: {
        10: '#EAF2FD',
        50: '#97BFF6',
        80: '#498AE2',
        DEFAULT: '#1C6DDB',
      },
      green: {
        10: '#E9F5EE',
        50: '#90CAA9',
        DEFAULT: '#219653',
      },
      red: {
        10: '#FDEEEE',
        50: '#F5ABAB',
        DEFAULT: '#EB5757',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    fontSize: {
      base: ['10px', { lineHeight: '1' }],
      xs: ['1.2rem', { lineHeight: '1rem' }],
      sm: ['1.4rem', { lineHeight: '1.65rem' }],
      md: ['1.6rem', { lineHeight: '1.85rem' }],
      lg: ['1.8rem', { lineHeight: '2.1rem' }],
      xl: ['2rem', { lineHeight: '2.4rem' }],
      '2xl': ['2.2rem', { lineHeight: '2.6rem' }],
      '3xl': ['2.4rem', { lineHeight: '2.8rem' }],
      '4xl': ['2.8rem', { lineHeight: '3.3rem' }],
      '5xl': ['3rem', { lineHeight: '3.4rem' }],
      '6xl': ['3.2rem', { lineHeight: '4rem' }],
      '7xl': ['4rem', { lineHeight: '4.4rem' }],
      '8xl': ['5rem', { lineHeight: '5.4rem' }],
      '9xl': ['6rem', { lineHeight: '6.4rem' }],
      '10xl': ['20rem', { lineHeight: '20.4rem' }],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '4px',
      'lg': '8px',
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     '999999': 999999,
     '1040999': 1040999,
     'auto': 'auto',
    },
    opacity: {
     '0': '0',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '10': '.1',
     '20': '.2',
     '30': '.3',
     '40': '.4',
     '50': '.5',
     '60': '.6',
     '70': '.7',
     '80': '.8',
     '90': '.9',
     '100': '1',
    },
    boxShadow: {
      light: '0px 0px 30px rgba(28, 80, 151, 0.2)',
      DEFAULT: '0px 0px 15px rgba(28, 80, 151, 0.05)',
    },
    dropShadow: {
      DEFAULT: '0px 4px 15px rgba(0, 0, 0, 0.15)',
    },
    backgroundImage: theme => ({
      'functions-letters' : "url('../src/assets/svg/functions-bg.svg')",
      'landing-bg'        : "url('../src/assets/svg/landing-bg.svg')",
     })
  },
  variants: {
    extend: {},
  },
  // plugins: []
}
