/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#FDFBF7',
        nadan: {
          terracotta: '#C85A32',
          'terracotta-dark': '#A64320',
          emerald: '#1B3B2B',
          'emerald-dark': '#12291E',
          cream: '#FDFBF7',
          card: '#F5F0E6',
          gold: '#D4AF37',
          amber: '#C59B27',
          charcoal: '#1A1918',
          sand: '#EADFCF',
        },
      },
      animation: {
        'fade-rise': 'fadeRise 0.8s ease-out forwards',
        'fade-rise-delay': 'fadeRise 0.8s ease-out 0.2s forwards',
        'fade-rise-delay-2': 'fadeRise 0.8s ease-out 0.4s forwards',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
