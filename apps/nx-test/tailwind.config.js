const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tlw-',
  content: [
    join(__dirname, '**/*.{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend:{
      colors: {
        'primary': '#ec6c00'
      }
    }
  }
};