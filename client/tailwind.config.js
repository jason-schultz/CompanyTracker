const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
      './public/index.html',
      './src/**/*.{js,jsx,ts,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
      },
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans]
        }
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
        cursor: ['disabled']
      },
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }
  