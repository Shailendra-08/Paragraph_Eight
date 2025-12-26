/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          600: '#475569',
          700: '#334155',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
