/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './**/*.html',
    './**/*.js',
    './**/*.jsx',
    './**/*.ts',
    './**/*.tsx',
  ]
  ,
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

