import scrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        success: {
          50: '#f0fdf4',
          300: '#86efac',
          500: '#22c55e',
          700: '#15803d',
          900: '#14532d',
        },
        warning: {
          50: '#fffbeb',
          300: '#fcd34d',
          500: '#f59e0b',
          700: '#b45309',
          900: '#78350f',
        },
        error: {
          50: '#fef2f2',
          300: '#fca5a5',
          500: '#ef4444',
          700: '#b91c1c',
          900: '#7f1d1d',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'primary-start': '#6366F1',
        'primary-end': '#8B5CF6',
        'secondary-start': '#EC4899',
        'secondary-end': '#8B5CF6',
        'accent-start': '#06B6D4',
        'accent-end': '#3B82F6',
      },
    },
  },
  plugins: [scrollbar],
};