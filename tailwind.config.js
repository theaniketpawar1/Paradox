/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class', // but we also use prefers-color-scheme in CSS
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // blue-900
          hover: '#1e40af',    // blue-800
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#60a5fa',    // blue-400
        },
        surface: {
          DEFAULT: '#f8fafc',
          hover: '#f1f5f9',
        },
        border: '#e2e8f0',
        text: '#0f172a',
        'text-muted': '#64748b',
        error: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4xl': '6rem',
        '5xl': '8rem',
      },
      borderRadius: {
        'lg': '0.75rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
}