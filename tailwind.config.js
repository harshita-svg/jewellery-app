/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '400': '400% 400%',
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      colors: {
        // Custom pastel tones
        pastelPink: '#fce4ec',
        pastelLavender: '#ede7f6',
        pastelPeach: '#fff0e6',
        pastelBlue: '#e3f2fd',
      },
    },
  },
  plugins: [],
}
