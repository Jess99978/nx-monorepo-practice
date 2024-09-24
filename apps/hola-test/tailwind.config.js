const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:"hola-",
  content: [
    join(__dirname, '**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
       'primary': {
        100: '#fef6e6',
        200: '#fce3b3',
        300: '#fbd999',
        400: '#f7b433',
        500: '#f5a100',
        600:'#dd9100'
      }
      }
    },
  }
};
