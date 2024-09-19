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
        primary:"rgb(245, 161, 0)"
      }
    },
  }
};
