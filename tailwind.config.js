module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'base': '13px',
      '2xl': ['1.5em', {
        letterSpacing: '0.03em',
        lineHeight: '1.3em',
      }],
      '4xl': ['200px', '160px'],
    },
    colors: {
      white: '#fff',
      violet: {
        'light': '#A07ACD',
        'bg': '#7541C8',
      },
      blue: {
        'light': 'hsl(217, 19%, 35%)',
        'dark': 'hsl(219, 29%, 14%)',
        'background': '#EDF2F8',
      },
      gray: {
        'light': 'hsl(0, 0%, 81%)',
        'blue': ' hsl(210, 46%, 95%)',
      }
    },
    boxShadow: {
      '2xl': '35px 36px 50px -15px rgba(0,0,0,0.2)',
    },
    height: {
      'full': '100%',
      'round': '35px'
    },
    width: {
      'full': '100%',
      'round': '35px'
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%'
    },
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
