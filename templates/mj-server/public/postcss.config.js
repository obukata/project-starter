module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    'postcss-inline-svg': {},
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-preset-env': {
      features: {
        'custom-properties': false
      }
    },
    autoprefixer: {
      grid: 'autoplace'
    }
  }
}
