module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        pink: '#FFD2FD',
        beige: '#FAD0C6',
        blue: '#3FBBFE',
        aqua: '#08F1FF',
        purplelight: '#C6A4F4',
        purple: '#9A78FF',
        purple1: '#A641FF',
        darkishblue: '#5A65FA',
        darkishpurple: '#6355FA',
        yellow: '#FFF4B6',
        darkblue: '#5C5C98',
        ultrablue: '#2D19FE',
        logo: '#694BFA',
        purpledark: '#694BF9',
        orange: '#CE7300',
        purpleultalight: '#E4DBFF',
        softviolet: 'rgba(166, 65, 255, 0.5)',
        lightgrey: '#7E7E7E',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'xxl': '100px',
      },
      width: {
        '66p': '66%',
        '32px': '32px',
        '100px': '100px',
        '184px': '184px',
        'logo-sm': '25px',
        'logo-lg': '40px',
        'footer-logo-sm': '64px',
        'footer-logo-lg': '88px',
        '1440px': '1440px',
      },
      height: {
        '4px': '4px',
        '56px': '56px',
        '100px': '100px',
        '160px': '160px',
        'footer-logo-sm': '85px',
        'footer-logo-lg': '117px',
        'logo-sm': '33px',
        'logo-lg': '52.59px',
        'wave': '148px',
      },
      fontSize: {
        button: ['18px', '23.81px'],
        'hs-sm': ['16px', '21.17px'],
        'hs-lg': ['24px', '31.75px'],
        'hs-large': ['28px', '37.04px'],
        'hs-xl': ['32px', '42.43px'],
        'hs-2xl': ['40px', '53px'],
        'hs-3xl': ['64px', '84.67px'],
      },
      boxShadow: {
        'white-glow': '0px 0px 5px rgba(255,255,255,.5)',
      },
      spacing: {
        'wave-middle': 'min(0px, calc((100% - 1440px) / 2))',
        'wave-left': 'min(0px, calc((175% - 1440px) / 2))',
        'wave-right': 'min(0px, calc((175% - 1440px) / 2))',
        'wave-right2': 'min(0px, calc(1440px - 100%))',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
