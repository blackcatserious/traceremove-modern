import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,md,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#0f3460',
        highlight: '#e94560',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      screens: {
        xs: '480px',
        '3xl': '1920px',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(26, 26, 46, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
