import type { Config } from 'tailwindcss';

export default {
  content: [
    './static/styles/**/*.css',
    './{components,islands,routes,lib}/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    extend: {
      fontFamily: {
        'mono': ['Sauce Code Pro', 'monospace'],
      },
      animation: {
        bounce: 'bounce 1s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        shake: 'shake 0.25s linear infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
        },
        shake: {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(-0.1rem)',
          },
          '75%': {
            transform: 'translateX(0.071rem)',
          },
        },
      },
    },
  },
} satisfies Config;
