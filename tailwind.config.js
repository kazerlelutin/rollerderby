module.exports = {
  darkMode: 'class',
  content: [
    './public/*.css',
    './pages/*.html',
    './templates/**/*.html',
    './ctrl/**/*.js',
    './index.html',
    './*.js',
    './utils/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
      colors: {
        rd: {
          bg: '#ebeadd',
          text: '#000',
          link: "#216632",
          highlight: "#bdad00",
        },
        dark: {
          text: '#ebeadd',
          bg: '#000',
          link: "#378C4C",
          highlight: "#bfba1d",
        },
        light: {
          bg: '#f7f6f3',
          'bg-dark': '#bec0c7',
          text: '#121523',
          'text-invert': '#fff',
          'highlight-dark': '#015657',
          card: '#d4dadd',
          'card-dark': '#8690b3',
        },

        twitch: {
          primary: '#5c16c5',
        },
        canvas: {
          default: '#121523',
        },
      },
    },
  },
  plugins: [],
}
