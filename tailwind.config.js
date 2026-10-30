/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F5F7FA',
        charcoal: '#0d1117',
        surface: '#161b22',
        steel: {
          300: '#9FB1BF',
          400: '#7F93A3',
          500: '#5E7385',
          600: '#46596A',
          700: '#2d3a45',
          800: '#1c2630',
          900: '#131a22',
          950: '#0d1117',
        },
        safety: {
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          900: '#431407',
        },
        alert: {
          300: '#F28089',
          400: '#EC5C67',
          500: '#E63946',
          600: '#C42F3B',
          700: '#9C2530',
          900: '#4D1219',
        },
        success: {
          400: '#4ADE80',
          500: '#22C55E',
        },
        warning: {
          400: '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-alert': '0 0 0 1px rgba(230,57,70,0.4), 0 0 24px rgba(230,57,70,0.35)',
        'glow-safety': '0 10px 30px -10px rgba(249,115,22,0.6)',
        'glow-card': '0 0 0 1px rgba(249,115,22,0.35), 0 12px 40px -12px rgba(249,115,22,0.35)',
      },
      keyframes: {
        'pulse-alert': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(230,57,70,0.7)' },
          '50%': { boxShadow: '0 0 0 8px rgba(230,57,70,0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-alert': 'pulse-alert 2s ease-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
