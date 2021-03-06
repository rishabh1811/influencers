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
      fontFamily: {
        'changa': ['Changa', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
        
      },

      screens: {
        "992": "992px",
        "1392": "992px",
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        '7logos': 'repeat(7, minmax(100px, 141px))',
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      }

    },
  },
  plugins: [],
}


// font-family: 'Changa', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Tajawal', sans-serif;