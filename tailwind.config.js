module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
        'hs-orangish': '#FACFC6',
        'hs-grey': '#555555',
        'hs-silver': '#C4C4C4',
        'hs-darketh': '#3E435F',
        'hs-gold': '#A38033',
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
        'large': '12px',
        'xxl': '100px',
        '32px': '32px',
      },
      width: {
        '66p': '66%',
        '32px': '32px',
        '70px': '70px',
        '100px': '100px',
        '184px': '184px',
        '1440px': '1440px',
        'logo-sm': '25px',
        'logo-lg': '40px',
        'footer-logo-sm': '64px',
        'footer-logo-lg': '88px',
        '1/2screen': '50vw',
      },
      height: {
        '4px': '4px',
        '56px': '56px',
        '100px': '100px',
        '160px': '160px',
        '500px': '500px',
        'footer-logo-sm': '85px',
        'footer-logo-lg': '117px',
        'logo-sm': '33px',
        'logo-lg': '52.59px',
        'wave': '148px',
        'fit': 'fit-content',
      },
      fontSize: {
        'hs-button': ['18px', '23.81px'],
        'hs-xs': ['14px', '18.52px'],
        'hs-sm': ['16px', '21.17px'],
        'hs-2sm': ['16px', '40px'],
        'hs-md': ['20px', '26.46px'],
        'hs-2md': ['20px', '40px'],
        'hs-3md': ['22px', '29.11px'],
        'hs-lg': ['24px', '31.75px'],
        'hs-2lg': ['24px', '40px'],
        'hs-3lg': ['25px', '33.07px'],
        'hs-large': ['28px', '37.04px'],
        'hs-2large': ['30px', '39.69px'],
        'hs-xl': ['32px', '42.43px'],
        'hs-3/2xl': ['36px', '47.63px'],
        'hs-2xl': ['38px', '50.27px'],
        'hs-3xl': ['40px', '53px'],
        'hs-4xl': ['56px', '74.09px'],
        'hs-5xl': ['62px', '82.03px'],
        'hs-6xl': ['64px', '84.67px'],
      },
      boxShadow: {
        'white-glow': '0px 0px 5px rgba(255,255,255,.5)',
        'orange-glow': '0px 0px 10px rgba(206, 115, 0, 0.5)',
      },
      spacing: {
        'wave-middle': 'min(0px, calc((100% - 1440px) / 2))',
        'wave-left': 'min(0px, calc((175% - 1440px) / 2))',
        'wave-right': 'min(0px, calc((175% - 1440px) / 2))',
        'wave-right2': 'min(0px, calc(1440px - 100%))',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover'],
    extend: {
      opacity: ['disabled'],
      cursor: ['hover', 'focus', 'disabled'],
    }
  }
}
