import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      // CUSTOM DESIGN SYSTEM — editorial/magazine aesthetic
      // NOT generic tech startup. Think: Aeon magazine meets academic journal
      colors: {
        // Primary palette — deep ink tones
        ink: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b8b8c1",
          400: "#92929f",
          500: "#747484",
          600: "#5e5e6c",
          700: "#4d4d58",
          800: "#42424b",
          900: "#1c1c22",  // Primary text
          950: "#0d0d11",  // Deepest
        },
        // Accent — burnt vermillion (not generic blue/purple)
        accent: {
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fececa",
          300: "#fcaba5",
          400: "#f87a71",
          500: "#ef5044",  // Primary accent
          600: "#dc3626",
          700: "#b9291c",
          800: "#99251b",
          900: "#7f251d",
        },
        // Secondary — warm brass/gold for highlights
        brass: {
          50: "#fdfaf3",
          100: "#f9f0d9",
          200: "#f2deb0",
          300: "#e9c67d",
          400: "#e0ab4e",  // Primary brass
          500: "#d49332",
          600: "#bc7627",
          700: "#9d5922",
          800: "#804822",
          900: "#6a3c1f",
        },
        // Paper tones for backgrounds
        paper: {
          white: "#FAFAF8",
          cream: "#F5F3EE",
          warm: "#EDE9E0",
          dark: "#1A1A1F",
          darker: "#131316",
        },
      },
      fontFamily: {
        // Display: elegant serif for headlines
        display: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        // Body: refined humanist sans
        body: ['"Source Sans 3"', '"Source Sans Pro"', 'system-ui', 'sans-serif'],
        // Mono: for code and technical elements
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        // Fluid type scale
        'display-xl': ['clamp(3rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        'section': '8rem',
        'section-sm': '4rem',
      },
      maxWidth: {
        'article': '42rem',   // ~680px — optimal reading width
        'content': '64rem',   // ~1024px — content area
        'wide': '80rem',      // ~1280px — wide sections
      },
      borderRadius: {
        'card': '0.75rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.1)',
        'glow': '0 0 40px rgba(239, 80, 68, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(-20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '42rem',
            color: 'var(--tw-prose-body)',
            a: { color: 'var(--tw-prose-links)', textDecoration: 'underline', textUnderlineOffset: '3px' },
            'h1, h2, h3': { fontFamily: '"Instrument Serif", Georgia, serif' },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
export default config;
