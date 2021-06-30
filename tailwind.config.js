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
        pink: '#FFD1FC',
        beige: '#FAD0C6',
        blue: '#3FBBFE',
        purplelight: '#C6A4F4',
        purple: '#A541FF',
        yellow: '#FFF4B6',
        darkblue: '#5C5C98',
        ultrablue: '#2D19FE',
        logo: '#694BFA',
        purpledark: '#694BF9',
        orange: '#CE7300',
        purpleultalight: '#E4DBFF'
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
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
