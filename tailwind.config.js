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
        icons: '2.5rem',
        '30ch': '30ch',
        '45ch': '45ch',
      },

      maxHeight: {
        logos_projects: '3rem',
      },

      gridTemplateColumns: {
        '1_350': 'minmax(0, 22rem)',
        '2_350': 'repeat(2, minmax(0, 22rem))',
        '3_350': 'repeat(3, minmax(0, 22rem))',
      },

      keyframes: {
        'text-transition': {
          '0%': {content: "''"},
          '50%': {color: 'black'},
          '100%': {content: 'View on CodePen'}
        }
      },

      animation: {
        'text-transition': 'text-transition 1s ease'
      }
  
    },

  },
  plugins: [],
}
