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
