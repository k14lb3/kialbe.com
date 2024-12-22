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
    },
  },
} satisfies Config;
