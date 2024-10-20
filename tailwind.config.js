const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#026980',
        right: '#5C980F',
        wrong: '#BF0000',
      },
      fontSize: {
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
