/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ---- Brand palette (edit here to retheme the whole site) ----
      colors: {
        navy: {
          DEFAULT: '#16243F', // primary / structural
          light: '#1B2A4A', // dark text
          deep: '#0F1A2E', // footer / overlays
        },
        orange: {
          DEFAULT: '#ED7D22', // accent / CTAs
          dark: '#D86A12',
        },
        cloud: '#F4F6FA', // light grey background
      },
      fontFamily: {
        // Inter is loaded from Google Fonts in index.html
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(22, 36, 63, 0.18)',
        'card-hover': '0 20px 40px -12px rgba(22, 36, 63, 0.28)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
