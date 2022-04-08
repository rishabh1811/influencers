module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FF7009",
        "lightBlue": "#008FCF",
      },

      screens: {
        "992": "992px",
      }

    },
  },
  plugins: [],
}