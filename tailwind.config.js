/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        'ink-soft': '#4A4A4A',
        canvas: '#FBFAF4',
        paper: '#FFFFFF',
        highlighter: '#FFF36D',
        'sticky-yellow': '#FFE872',
        'sticky-mint': '#A8F0D4',
        'sticky-blue': '#9ED9FF',
        'sticky-peach': '#FFB49A',
        'sticky-lilac': '#CFC4FF',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['13px', { lineHeight: '18px' }],
        'base': ['14px', { lineHeight: '20px' }],
        'lg': ['15px', { lineHeight: '22px' }],
        'xl': ['16px', { lineHeight: '24px' }],
        '2xl': ['18px', { lineHeight: '28px' }],
        '3xl': ['20px', { lineHeight: '32px' }],
        '4xl': ['28px', { lineHeight: '36px' }],
        '5xl': ['36px', { lineHeight: '44px' }],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
      },
      boxShadow: {
        solid: '5px 5px 0 #111111',
        'solid-white': '5px 5px 0 rgba(255, 255, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
