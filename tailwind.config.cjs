/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BF5700',
          light: '#FF8C38',
          dark: '#8C3F00',
        },
        slate: {
          custom: '#41516C',
        },
        surface: {
          DEFAULT: '#0a0a0f',
          light: '#1a1a2e',
          alt: '#f8f8fa',
        },
        darkSlate: '#1e2532',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'equalizer': 'equalizer 1.2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(191, 87, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(191, 87, 0, 0.8), 0 0 40px rgba(191, 87, 0, 0.4)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        equalizer: {
          '0%, 100%': { height: '10%' },
          '50%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
};
