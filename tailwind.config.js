module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'dark-grayish-blue': 'hsl(210, 10%, 33%)',
      'gray': 'hsl(220, 18%, 97%)',
      'grayish-blue': 'hsl(201, 11%, 66%)',
      'light-blue': 'hsl(233, 100%, 69%)',
      'light-blue-shade': 'hsl(233, 72%, 62%)',
      'strong-cyan': 'hsl(171, 66%, 44%)',
      'strong-cyan-shade': 'hsl(171, 66%, 38%)',
      'white': 'hsl(255, 100%, 100%)'
    },

    fontFamily: {
      'default': ['"Bai Jamjuree"', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
