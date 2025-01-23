/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#f82ba9',
        secondary: '#feedf7',
        white: '#fff',
        black: '#000',
        gray: '#757f95',
        text: '#160e4b',
        yellow: '#fba707',
        red: '#f05454',
        violite: '#8c52ff',
        teal: '#17a2b8',
        lightBlue: '#00bfff',
        green: '#4caf50',
      },
      borderRadius: {
        sm: '10px',
        md: '14px',
        lg: '20px',
        xl: '30px',
        '2xl': '50px',
      },
      fontSize: {
        '50': '50px',
        '45': '45px',
        '34': '34px',
        '32': '32px',
        '28': '28px',
        '22': '22px',
        '20': '20px',
        '18': '18px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
