import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#60a5fa',
        secondary: '#93c5fd',
        'bg-light': '#ffffff',
        'bg-dark': '#222222',
        'text-light-primary': '#222222',
        'text-light-secondary': '#555555',
        'text-dark-primary': '#ffffff',
        'text-dark-secondary': '#cccccc',
        danger: '#ef4444',
        success: '#22c55e',
        warning: '#facc15',
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in-left-right': {
          '0%': { opacity: '0', transform: 'translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-out-right-left': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'fade-in-left-right': 'fade-in-left-right 0.1s ease-in',
        'fade-out-right-left': 'fade-out-right-left 0.1s ease-out',
        'slide-right': 'slide-right 0.2s ease-in',
        'slide-left': 'slide-left 0.2s ease-in',
        'slide-down': 'slide-down 0.2s ease-in',
        'slide-up': 'slide-up 0.2s ease-in',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
