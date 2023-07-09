module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './atoms/**/*.{js,ts,jsx,tsx}',
    './molecules/**/*.{js,ts,jsx,tsx}',
    './organisms/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-circle': 'spin 1s linear infinite'
      },
      colors: {
        primary: "#11c1ed",
        grey: '#ccc',
        secondary: "#d3a809",
        green: '#30ae27',
        'dark-green': '#086e18',
        'dark-red': '#a90404',
        red: '#ea3030',
        'cyan': '#6dcfe7'
      }
    },
  },
  plugins: [],
};
