/* eslint-disable */
/** @type {import('tailwindcss').Config} */
const colors = {
  primary: {
    light: '#E2DEED',
    DEFAULT: '#824DFF',
    dark: '#6D0EF1',
  },
  inactive: {
    light: '#D3CEE3',
    DEFAULT: '#998DBF',
    dark: '#6E5CA3',
  },
  secondary: {
    light: '#CCFFE9',
    DEFAULT: '#09A7AA',
    dark: '#007780',
  },
  blue: {
    light: '#B2E5FF',
    DEFAULT: '#0B94D8',
    dark: '#005580',
  },
  green: {
    light: '#D6F6D6',
    DEFAULT: '#319B31',
    dark: '#247524',
  },
  red: {
    light: '#F6D6E4',
    DEFAULT: '#D22D5C',
    dark: '#A82443',
  },
  yellow: {
    light: '#FEFFCF',
    DEFAULT: '#FFD116',
    dark: '#C39100',
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: { ...colors },
    },
  },
  plugins: []
}