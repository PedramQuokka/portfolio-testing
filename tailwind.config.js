/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Figma-inspired palette
        'fg-primary': '#0D0D0D',
        'fg-secondary': '#4F4F4F',
        'fg-tertiary': '#8B8B8B',
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F3F3F3',
        'bg-tertiary': '#EBEBEB',
        'accent-primary': '#18A0FB',
        'accent-secondary': '#1EA7E1',
        'success': '#27AE60',
        'warning': '#F2CC0F',
        'error': '#F24444',
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
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [],
}
