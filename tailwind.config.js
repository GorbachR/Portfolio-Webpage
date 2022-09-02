/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Work Sans'", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"]
      },

      colors: {
        bluehover: '#0000'
      },

      maxWidth: {
        icon1: '5rem',
        icon2: '6rem',
        icon3: '3rem',
        '30ch': '30ch',
        '45ch': '45ch',
      },

      minWidth: {
        'centeredContent': '80%'
      },

      maxHeight: {
        icon3: '3rem',
      },

      gridTemplateColumns: {
        '1_350': 'minmax(0, 350px)',
        '2_350': 'repeat(2, minmax(0, 350px))',
        '3_350': 'repeat(3, minmax(0, 350px))',
        '1_fit': 'minmax(0, max-content)',
        '2_fit': 'repeat(2, minmax(0, max-content))'
      }
  
    },

  },
  plugins: [],
}
