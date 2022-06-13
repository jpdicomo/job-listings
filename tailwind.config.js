module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens:{
      'sm':'375px',
      'lg':'1280px'
    },
    extend: {
      colors:{
        desDarkCyan: '#5BA4A4',
        lightCyanBg: 'hsl(180, 52%, 96%)',
        LightGrayishCyan: 'hsl(180, 31%, 95%)',
        DarkGrayishCyan: 'hsl(180, 8%, 52%)',
        VeryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
      },
    },
  },
  plugins: [],
}
