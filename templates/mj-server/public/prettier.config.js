module.exports = {
  singleQuote: true,
  printWidth: 80,
  useTabs: false,
  semi: false,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'always',
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false
}
