/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      },
      fontFamily: {
        sans: ['Consolas', 'sans-serif'],
      },
    }
  },
  plugins: []
}
