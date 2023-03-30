module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './molecules/**/*.{js,ts,jsx,tsx}',
    './organisms/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#291D97",
        grey: '#ccc'
      }
    },
  },
  plugins: [],
};
