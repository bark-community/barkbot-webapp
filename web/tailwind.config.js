const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-black': '#0f0900',
        'custom-orange': '#ffa500',
        'dark-gray': '#202020',
        'light-gray': '#F9F9FB',
        'white': '#ffffff',
        'gray-300': '#E8E8E8',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C7B1A3",
          secondary: "#2f2f2f",
          accent: "#202020",
          neutral: "#F9F9FB",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
